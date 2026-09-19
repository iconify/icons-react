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
		"content": `<style>.cifdn6bng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 6.565l7.735 29.972m12.02-25.74l6.897 26.107m-17.333 4.585l8.647-34.978m10.386 34.978L42.5 6.511");
}
</style><path class="cifdn6bng"/>`,
		"fallback": "arcticons:airwallet",
	});
}

export default Component;
