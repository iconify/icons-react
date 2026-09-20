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
		"content": `<style>.hclo6jb2r {
  d: path("M8 16h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p0mfrtbaw {
  d: path("M7.5 5 10 7.5l-4 4 -4 -4L4.5 5");
}

.ubmhydvvx {
  d: path("M8 19.5h8");
}

.vs9x-_bah {
  d: path("M19.5 5 22 7.5l-4 4 -4 -4L16.5 5");
}
</style><g class="hntgybcog"><path class="p0mfrtbaw"/><path class="vs9x-_bah"/><path class="hclo6jb2r"/><path class="ubmhydvvx"/></g>`,
		"fallback": "iconmind:embedding-compare-outline-thin",
	});
}

export default Component;
