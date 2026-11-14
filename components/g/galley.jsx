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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0a7sccky {
  d: path("M14.5 15h5v3.5A2.5 2.5 0 0 1 17 21a2.5 2.5 0 0 1-2.5-2.5Zm5 1h.75a1.5 1.5 0 0 1 0 3h-.75");
}

.z5nb6qbkq {
  d: path("M11.9 20H2.5V3h15v9.2M10 3v17M7 9v3m6-3v3");
}
</style><g class="ulnmmdpxh"><path class="z5nb6qbkq"/><path class="y0a7sccky"/></g>`,
		"fallback": "uix-sharp:galley",
	});
}

export default Component;
