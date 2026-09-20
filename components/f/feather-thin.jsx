import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y0tadh-7x {
  fill: currentColor;
  d: path("M236 80a60 60 0 0 0-102.41-42.44l-70.07 69.27a11.9 11.9 0 0 0-3.52 8.48v75l-30.83 30.86a4 4 0 0 0 5.66 5.66L65.66 196h75a12 12 0 0 0 8.48-3.51L218 122.83l.4-.4A59.63 59.63 0 0 0 236 80m-96.77-36.77A52 52 0 0 1 213.5 116h-67.84l41.17-41.17a4 4 0 1 0-5.66-5.66L116 134.34V66.19ZM68 115.31a4 4 0 0 1 1.16-2.81L108 74.1v68.24l-40 40Zm75.51 71.52a4 4 0 0 1-2.82 1.17h-67l64-64h68Z");
}
</style><path class="y0tadh-7x"/>`,
		"fallback": "ph:feather-thin",
	});
}

export default Component;
