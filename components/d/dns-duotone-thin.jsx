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
		"content": `<style>.bpowfit_a {
  fill: currentColor;
  d: path("M8 6a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-9a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0uv_gb9p {
  fill: currentColor;
  d: path("M8 13a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nyn6oyb6w {
  d: path("M8 13a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2");
}

.rwo6s1bco {
  d: path("M8 6a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-9a2 2 0 0 1 -2 -2");
}
</style><g class="hntgybcog"><path class="bpowfit_a"/><path class="m0uv_gb9p"/><path class="ftqzjnb8u"/><path class="rwo6s1bco"/><path class="nyn6oyb6w"/></g>`,
		"fallback": "iconmind:dns-duotone-thin",
	});
}

export default Component;
