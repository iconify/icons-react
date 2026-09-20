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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.dhtxwjb8m {
  d: path("m2 13 5 -5 5 5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wyx0j3bin {
  d: path("m7 18 5 -5 5 5Z");
}

.x9f8wob1r {
  d: path("m10 10 6 -6 6 6Z");
}
</style><g class="hntgybcog"><path class="dhtxwjb8m"/><path class="x9f8wob1r"/><path class="wyx0j3bin"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:forest-outline-thin",
	});
}

export default Component;
