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
		"content": `<style>.e-uvtub8c {
  d: path("M9.5 18.25c0-3 2-5 5-5c0 3-2 5-5 5Z");
}

.q6evb1tgz {
  d: path("M6.5 10h11v11.5h-11Zm3-3h5v3h-5Zm.5 0V4.5a2 2 0 0 1 4 0V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q6evb1tgz"/><path class="e-uvtub8c"/></g>`,
		"fallback": "uix-sharp:aromatherapy",
	});
}

export default Component;
