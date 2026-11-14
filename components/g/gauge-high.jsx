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
		"content": `<style>.g2kx7ng5b {
  fill: currentColor;
  d: path("M12 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m6d8fab6w {
  d: path("m12 12l4.5-4.5M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}

.mvgkmom8z {
  d: path("M3 12a9 9 0 0 1 18 0Z");
}
</style><g class="hntgybcog"><path class="mvgkmom8z"/><path class="g2kx7ng5b"/><path class="m6d8fab6w"/></g>`,
		"fallback": "uix:gauge-high",
	});
}

export default Component;
