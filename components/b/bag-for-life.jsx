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
		"content": `<style>.dameh2bad {
  d: path("M7 9.5c0-6.75 7.5-6.75 7.5 0");
}

.g1lpqfbpl {
  d: path("M9.5 9.5c0-6.75 7.5-6.75 7.5 0m-14.5 0l2 2.5m17-2.5l-2 2.5M12 15.75c-1-1.75-4-1.75-4 0s3 1.75 4 0s4-1.75 4 0s-3 1.75-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o23rm40sh {
  d: path("M5.474 9.5h13.052a2.625 2.625 0 0 1 2.605 2.951l-.844 6.75a2.625 2.625 0 0 1-2.604 2.299H6.317a2.625 2.625 0 0 1-2.604-2.299l-.844-6.75A2.625 2.625 0 0 1 5.474 9.5");
}
</style><g class="hntgybcog"><path class="o23rm40sh"/><path class="dameh2bad"/><path class="g1lpqfbpl"/></g>`,
		"fallback": "uix:bag-for-life",
	});
}

export default Component;
