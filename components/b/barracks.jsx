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

.mcp7jfb-j {
  d: path("M10 20.5v-5h4v5");
}

.zrh_0dbgb {
  d: path("m3.501 11.526l7.75-3.671a1.75 1.75 0 0 1 1.498 0l7.75 3.671a1.75 1.75 0 0 1 1.001 1.581v5.643a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-5.643a1.75 1.75 0 0 1 1.001-1.581M12 7.5v-5m0 0h4.5v3H12");
}
</style><g class="hntgybcog"><path class="zrh_0dbgb"/><path class="mcp7jfb-j"/></g>`,
		"fallback": "uix:barracks",
	});
}

export default Component;
