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
		"content": `<style>.akc5t163v {
  d: path("M11 16q2-6 7.5-4.75");
}

.bzr1dpb5e {
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v7.25A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-7.25A4.375 4.375 0 0 1 6.875 4");
}

.d1qyx9boj {
  d: path("m17 8.75l1.5 2.5l-2.5 1.5M5.5 16H8m-2-3.5h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bzr1dpb5e"/><path class="akc5t163v"/><path class="d1qyx9boj"/></g>`,
		"fallback": "uix:air-swipe",
	});
}

export default Component;
