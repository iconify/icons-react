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
		"content": `<style>.pr2iyxt7r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 19h.01");
}

.qwnwi886e {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 19h.01");
}

.v9atlcb8c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.05 10.21a5 3.25-20 1 1 9.4-3.42a5 3.25-20 1 1-9.4 3.42m2.14-4.06l2.11 5.79m.9-6.88l2.11 5.79m5.44-2.35h3a1.5 1.5 0 0 1 1.34.83l1 2a1.5 1.5 0 0 1 .16.67v2.25h-5.5Zm0 3h5.5m-18.5 2.75h13");
}

.xw30-oz_l {
  cx: 18px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zihitx70r {
  cx: 6.5px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="y9tr6bcfx"><path class="v9atlcb8c"/><circle class="zihitx70r"/><path class="qwnwi886e"/><circle class="xw30-oz_l"/><path class="pr2iyxt7r"/></g>`,
		"fallback": "iconoven:cement-mixer",
	});
}

export default Component;
