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
		"content": `<style>.bwj3uvbit {
  d: path("M2.5 12.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}

.hgsa0iwbw {
  d: path("M10.5 8.5v4L13 14m8-10v5.5m0 3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bwj3uvbit"/><path class="hgsa0iwbw"/></g>`,
		"fallback": "uix:clock-alert",
	});
}

export default Component;
