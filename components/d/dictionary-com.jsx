import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y9asg1udf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.147 41.354V14.77l-13.682-2.623l8.175 4.885v24.32H5.5V6.647h19.647A17.354 17.354 0 0 1 42.5 24h0a17.354 17.354 0 0 1-17.353 17.353");
}
</style><path class="y9asg1udf"/>`,
		"fallback": "arcticons:dictionary-com",
	});
}

export default Component;
