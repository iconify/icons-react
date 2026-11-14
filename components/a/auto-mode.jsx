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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pshvtbs4a {
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.zog2k4bwb {
  d: path("M5 8v12.5M12 8v12.5M5 14h14V8");
}
</style><g class="hntgybcog"><path class="pshvtbs4a"/><path class="zog2k4bwb"/></g>`,
		"fallback": "uix:auto-mode",
	});
}

export default Component;
