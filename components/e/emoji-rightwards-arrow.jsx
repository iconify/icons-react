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
		"content": `<style>.y3zy90tsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.885 34.999L42.5 24L31.885 13.001l-2.261 2.717l6.204 6.428H5.5v3.708h30.328l-6.204 6.428z");
}
</style><path class="y3zy90tsp"/>`,
		"fallback": "arcticons:emoji-rightwards-arrow",
	});
}

export default Component;
