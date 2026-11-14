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
		"content": `<style>.ackg-fb3x {
  d: path("M9.5 12L16 9l5 1.5V17");
}

.ets9m28xj {
  d: path("M3 9h13v12H3zl1.5-6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kwkkx9b3h {
  d: path("M6.5 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 0h.01");
}
</style><g class="hntgybcog"><path class="ets9m28xj"/><path class="ackg-fb3x"/><path class="kwkkx9b3h"/></g>`,
		"fallback": "uix:cling-wrap-box",
	});
}

export default Component;
