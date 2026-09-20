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
		"content": `<style>.fz2eobceg {
  d: path("m8.5 15.5 7 -7");
}

.ib3hnj95a {
  d: path("M8.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.jusug-b0m {
  d: path("M13.5 14.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.m0hvambgh {
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.pywr_yykw {
  d: path("m4 12 8 -8h8v8l-8 8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="pywr_yykw"/><path class="m0hvambgh"/><path class="ib3hnj95a"/><path class="fz2eobceg"/><path class="jusug-b0m"/></g>`,
		"fallback": "iconmind:discount-percent-outline-bold",
	});
}

export default Component;
