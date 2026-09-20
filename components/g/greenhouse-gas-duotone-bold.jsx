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
		"content": `<style>.acja6ya7a {
  fill: currentColor;
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ckwdk7nmy {
  d: path("M4 20v-8l8 -8 8 8v8Z");
}

.evjfijbqj {
  fill: currentColor;
  d: path("M4 20v-8l8 -8 8 8v8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zoz5ar7wf {
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="evjfijbqj"/><path class="acja6ya7a"/><path class="ckwdk7nmy"/><path class="zoz5ar7wf"/></g>`,
		"fallback": "iconmind:greenhouse-gas-duotone-bold",
	});
}

export default Component;
