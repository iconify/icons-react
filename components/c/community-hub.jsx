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

.u77jqjlbq {
  d: path("M9 11h6a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 15 16h-4l-1.5 1.75V16H9a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 9 11");
}
</style><g class="hntgybcog"><path class="qmptz25oz"/><path class="u77jqjlbq"/></g>`,
		"fallback": "uix:community-hub",
	});
}

export default Component;
