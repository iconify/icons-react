import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xzrv35bje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h16v6.5H4Zm3 6.5L8.5 19a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5L17 9.5M10 3v6.5M14 3v6.5m-2 5h.01");
}
</style><path class="xzrv35bje"/>`,
		"fallback": "uix-sharp:electric-shaver",
	});
}

export default Component;
