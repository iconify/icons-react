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
		"content": `<style>.l30ixcc4c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 16.75h3l2-11.25h-3");
}

.oxjz2acnh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15.5v-.75q0-1.25.63-1.87q.62-.63 1.87-.63h4.5q1.25 0 1.65 1.19l.7 2.12q.4 1.19-.85 1.19H4q-1.25 0-1.25-1.25");
}

.pr2iyxt7r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 19h.01");
}

.qwnwi886e {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 19h.01");
}

.xw30-oz_l {
  cx: 18px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4jk0bn2u {
  width: 5px;
  height: 5.25px;
  x: 2.75px;
  y: 7px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
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
</style><g class="y9tr6bcfx"><path class="oxjz2acnh"/><rect class="y4jk0bn2u"/><path class="l30ixcc4c"/><circle class="zihitx70r"/><path class="qwnwi886e"/><circle class="xw30-oz_l"/><path class="pr2iyxt7r"/></g>`,
		"fallback": "iconoven:delivery-scooter",
	});
}

export default Component;
