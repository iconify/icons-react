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
		"content": `<style>.i45rnbews {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.361 17.016L10.527 31.69V5.5l13.604 7.207v22.178L37.473 42.5");
}
</style><path class="i45rnbews"/>`,
		"fallback": "arcticons:datacamp",
	});
}

export default Component;
