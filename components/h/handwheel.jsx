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
		"content": `<style>.czu33icqx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.ds8eh_bwb {
  d: path("M10 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m.25-1L5.5 6.25M13.75 9l4.75-2.75M12 12v9.5m-3.5 0h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="czu33icqx"/><path class="ds8eh_bwb"/></g>`,
		"fallback": "uix:handwheel",
	});
}

export default Component;
