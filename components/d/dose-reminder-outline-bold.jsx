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
		"content": `<style>.k1uyapbnn {
  d: path("M17 14v3h3");
}

.rruu58b-y {
  d: path("m4 11 5 -5a3.5 3.5 0 0 1 5 5l-5 5a3.5 3.5 0 0 1 -5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u6dphkbyx {
  d: path("M13 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="s0phu2bbs"><path class="rruu58b-y"/><path class="u6dphkbyx"/><path class="k1uyapbnn"/></g>`,
		"fallback": "iconmind:dose-reminder-outline-bold",
	});
}

export default Component;
