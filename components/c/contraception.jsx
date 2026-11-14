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
		"content": `<style>.l_difefks {
  d: path("M4.5 6.25C5 9 8 10 12 10s7-1 7.5-3.75M12 10v5.5");
}

.q3f1_xb_c {
  d: path("M11.5 15.5c-.5 2.5 0 4-1 6m2-6c.5 2.5 0 4 1 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w9lonf6hh {
  fill: currentColor;
  d: path("M3 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm15 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="l_difefks"/><path class="w9lonf6hh"/><path class="q3f1_xb_c"/></g>`,
		"fallback": "uix-sharp:contraception",
	});
}

export default Component;
