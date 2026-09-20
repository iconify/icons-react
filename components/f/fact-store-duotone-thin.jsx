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
		"content": `<style>.dy-bj6bwq {
  d: path("M14 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m8c8atiya {
  fill: currentColor;
  d: path("M4 15v4h16v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.pfjq2-b9j {
  fill: currentColor;
  d: path("M14 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sj2zz9b3r {
  d: path("M8 10h4");
}

.xn7bwccty {
  d: path("M8 6h8");
}
</style><g class="hntgybcog"><path class="m8c8atiya"/><path class="pfjq2-b9j"/><path class="n0n63pb2v"/><path class="xn7bwccty"/><path class="sj2zz9b3r"/><path class="dy-bj6bwq"/></g>`,
		"fallback": "iconmind:fact-store-duotone-thin",
	});
}

export default Component;
