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
		"content": `<style>.f4-a3xfdq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7.25h16.5");
}

.hm-bgfqny {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.25 5h.01");
}

.jf60lda-p {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.xvlspstxg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 10.75h6m-6.25 4v3m3.25-3v3m3.25-3v3");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="jf60lda-p"/><path class="f4-a3xfdq"/><path class="hm-bgfqny"/><path class="xvlspstxg"/></g>`,
		"fallback": "iconoven:dishwasher",
	});
}

export default Component;
