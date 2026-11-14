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

.d1qyx9boj {
  d: path("m17 8.75l1.5 2.5l-2.5 1.5M5.5 16H8m-2-3.5h2.5");
}

.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="akc5t163v"/><path class="d1qyx9boj"/></g>`,
		"fallback": "uix-sharp:air-swipe",
	});
}

export default Component;
