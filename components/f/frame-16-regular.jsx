import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uwhalhbyb {
  fill: currentColor;
  d: path("M4 1.5a.5.5 0 0 0-1 0V3H1.5a.5.5 0 0 0 0 1H3v8H1.5a.5.5 0 0 0 0 1H3v1.5a.5.5 0 0 0 1 0V13h8v1.5a.5.5 0 0 0 1 0V13h1.5a.5.5 0 0 0 0-1H13V4h1.5a.5.5 0 0 0 0-1H13V1.5a.5.5 0 0 0-1 0V3H4zM12 12H4V4h8z");
}
</style><path class="uwhalhbyb"/>`,
		"fallback": "fluent:frame-16-regular",
	});
}

export default Component;
