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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yptca_bjx {
  d: path("M2.94 8.52a10 10 0 0 1 18.12 0");
}

.ysp_-wbkk {
  d: path("m19 12.75l1.43 1.11l-1.67.7L19.85 16l-1.79.25l.68 1.67l-1.79-.22l.22 1.79l-1.67-.68l-.25 1.79l-1.44-1.09l-.7 1.67L12 19.75a7 7 0 1 1 7-7m-9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="ysp_-wbkk"/><path class="yptca_bjx"/></g>`,
		"fallback": "iconoven:circular-saw",
	});
}

export default Component;
