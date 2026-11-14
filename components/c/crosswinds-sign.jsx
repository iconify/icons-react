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
		"content": `<style>.dptozmb-f {
  d: path("M3 2.5h18v15H3Zm9 15v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhqmbibcr {
  d: path("M6 8h8a1.25 1.25 0 1 0-1.25-1.25M6 11h6m-6 3h10a1.25 1.25 0 1 0-1.25-1.25");
}
</style><g class="ulnmmdpxh"><path class="dptozmb-f"/><path class="vhqmbibcr"/></g>`,
		"fallback": "uix-sharp:crosswinds-sign",
	});
}

export default Component;
