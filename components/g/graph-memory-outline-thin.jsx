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
		"content": `<style>.c8z9pcctp {
  d: path("M8.5 6.5 11 9");
}

.g2k78ab8a {
  d: path("M15.5 6.5 13 9");
}

.gr97ezb6h {
  d: path("M15.5 5.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.u8l45l7zq {
  d: path("M6.5 5.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.we3axlb2u {
  d: path("M11 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="u8l45l7zq"/><path class="gr97ezb6h"/><path class="we3axlb2u"/><path class="c8z9pcctp"/><path class="g2k78ab8a"/></g>`,
		"fallback": "iconmind:graph-memory-outline-thin",
	});
}

export default Component;
