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
		"content": `<style>.jz3f23bpu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h16.5v18.5H3.75zm3.25 0v18.5");
}

.mnab2pjgg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 15.75c-2-1.85-3.25-3.6-3.25-5.25a3.25 3.25 0 0 1 6.5 0c0 1.65-1.25 3.4-3.25 5.25Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w--yti86f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.75 10.5h.01");
}
</style><g class="ux2u0rbkq"><path class="jz3f23bpu"/><path class="mnab2pjgg"/><path class="w--yti86f"/></g>`,
		"fallback": "iconoven:guidebook-sharp",
	});
}

export default Component;
