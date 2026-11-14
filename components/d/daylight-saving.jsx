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
		"content": `<style>.he2crsovm {
  d: path("M8.75 12v3.25l2.5 1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ictbt44vq {
  fill: currentColor;
  d: path("M15.5 6.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.lr2lbob8c {
  d: path("M2.5 15.25a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0");
}

.tfoguobqb {
  d: path("M17.25 3.25V2m3.5 4.75H22m-4.75 3.5v1.25m-3.5-4.75H12.5");
}
</style><g class="hntgybcog"><path class="lr2lbob8c"/><path class="he2crsovm"/><path class="ictbt44vq"/><path class="tfoguobqb"/></g>`,
		"fallback": "uix:daylight-saving",
	});
}

export default Component;
