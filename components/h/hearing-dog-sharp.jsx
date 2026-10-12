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
		"content": `<style>.fff87wfep {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.68 4.23l1.64 1.79l.68.73h4l.68-.73l1.64-1.79l.68-.73l.2.98l.6 3.04l.2.98l-.15.99l-.7 4.52L17 15l-.72.69l-3.56 3.37l-.72.69l-.72-.69l-3.56-3.37L7 15l-.15-.99l-.7-4.52L6 8.5l.2-.98l.6-3.04l.2-.98z");
}

.gk-c06bwt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 11h.01M14 11h.01");
}

.m8c5cec1e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 14.5h2M3.75 9a6 6 0 0 0 0 6m16.5-6a6 6 0 0 1 0 6");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="fff87wfep"/><path class="gk-c06bwt"/><path class="m8c5cec1e"/></g>`,
		"fallback": "iconoven:hearing-dog-sharp",
	});
}

export default Component;
