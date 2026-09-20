import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ng7riubwb {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16");
}
</style><path class="ng7riubwb"/>`,
		"fallback": "fluent:circle-20-filled",
	});
}

export default Component;
