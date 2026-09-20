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
		"content": `<style>.d9acmebfe {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kc5-9ib3u {
  d: path("M9 18.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.m1b4e0b4z {
  d: path("M6 11h8");
}

.uxsptjbvt {
  d: path("M6 7h12");
}
</style><g class="hntgybcog"><path class="d9acmebfe"/><path class="uxsptjbvt"/><path class="m1b4e0b4z"/><path class="kc5-9ib3u"/></g>`,
		"fallback": "iconmind:certificate-outline-thin",
	});
}

export default Component;
