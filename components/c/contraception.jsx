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

.l_difefks {
  d: path("M4.5 6.25C5 9 8 10 12 10s7-1 7.5-3.75M12 10v5.5");
}

.q3f1_xb_c {
  d: path("M11.5 15.5c-.5 2.5 0 4-1 6m2-6c.5 2.5 0 4 1 6");
}

.xwn-soedl {
  fill: currentColor;
  d: path("M3 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m15 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="l_difefks"/><path class="xwn-soedl"/><path class="q3f1_xb_c"/></g>`,
		"fallback": "uix:contraception",
	});
}

export default Component;
