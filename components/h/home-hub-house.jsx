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

.qmptz25oz {
  d: path("m4.422 9.714l5.875-5.011a2.625 2.625 0 0 1 3.406 0l5.875 5.011a2.63 2.63 0 0 1 .922 1.997v6.164a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 17.875v-6.164a2.63 2.63 0 0 1 .922-1.997");
}

.stq6e_bnl {
  d: path("M10.25 14.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m.5-1.25L8.5 10.75M13.25 13l2.25-2.25m-4.75 4.75L8.5 17.75m4.75-2.25l2.25 2.25");
}
</style><g class="hntgybcog"><path class="qmptz25oz"/><path class="stq6e_bnl"/></g>`,
		"fallback": "uix:home-hub-house",
	});
}

export default Component;
