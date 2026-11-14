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
		"content": `<style>.fzg6swm8u {
  d: path("M2.5 6.25L10 10.5l7.5-4.25M10 10.5V19m6.75-1.5h2.5A1.75 1.75 0 0 1 21 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75m-.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whenu71ey {
  d: path("M12.559 17.55L10 19l-7.5-4.25v-8.5L10 2l7.5 4.25v5.98");
}
</style><g class="hntgybcog"><path class="whenu71ey"/><path class="fzg6swm8u"/></g>`,
		"fallback": "uix:api-lock",
	});
}

export default Component;
