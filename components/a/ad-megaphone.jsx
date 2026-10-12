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

.kepgnhgbs {
  d: path("M5 17.75v2a1.5 1.5 0 0 0 3 0v-2m10.75-6a3.5 3.5 0 0 1 0 5");
}

.kh4slxelk {
  width: 6px;
  height: 4.5px;
  x: 15.25px;
  y: 2.75px;
  rx: 1.5px;
}

.t86l9bcig {
  d: path("M2.75 12.5a1 1 0 0 1 1-1h3.5L14.5 8a1 1 0 0 1 1.5.88v10.74a1 1 0 0 1-1.5.88L7.25 17h-3.5a1 1 0 0 1-1-1Z");
}

.xb3xm_rdf {
  d: path("m17.25 6l1-2l1 2");
}
</style><g class="hntgybcog"><path class="t86l9bcig"/><path class="kepgnhgbs"/><rect class="kh4slxelk"/><path class="xb3xm_rdf"/></g>`,
		"fallback": "iconoven:ad-megaphone",
	});
}

export default Component;
