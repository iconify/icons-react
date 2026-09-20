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
		"content": `<style>.e9st7nbtn {
  fill: currentColor;
  d: path("M106.78 26.29a13.88 13.88 0 0 0-15.68 8.26s0 .08 0 .12l-64 159.94A14 14 0 0 0 40 214h64a14 14 0 0 0 14-14V40a13.87 13.87 0 0 0-11.22-13.71M106 200a2 2 0 0 1-2 2H40a2 2 0 0 1-1.85-2.78l.05-.11l64-159.92a2 2 0 0 1 3.8.81Zm122.92-5.39l-64-159.94v-.12A14 14 0 0 0 138 40v160a14 14 0 0 0 14 14h64a14 14 0 0 0 12.93-19.39Zm-11.26 6.49a1.93 1.93 0 0 1-1.67.9H152a2 2 0 0 1-2-2V40a1.82 1.82 0 0 1 1.6-2a2.6 2.6 0 0 1 .54-.06a1.76 1.76 0 0 1 1.69 1.2l64 159.92l.05.11a2 2 0 0 1-.22 1.93");
}
</style><path class="e9st7nbtn"/>`,
		"fallback": "ph:flip-horizontal-light",
	});
}

export default Component;
