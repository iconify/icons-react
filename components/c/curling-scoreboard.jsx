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
		"content": `<style>.hl338u88n {
  d: path("M6.5 7.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m8.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p7zfpdije {
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 18 20H6a3.5 3.5 0 0 1-3.5-3.5v-9A3.5 3.5 0 0 1 6 4m-3.5 7.5h19m-9.5 0V20");
}
</style><g class="hntgybcog"><path class="p7zfpdije"/><path class="hl338u88n"/></g>`,
		"fallback": "uix:curling-scoreboard",
	});
}

export default Component;
