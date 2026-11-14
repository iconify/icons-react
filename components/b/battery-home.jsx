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

.nrpxlyb6e {
  d: path("M8.625 12h4.75A2.625 2.625 0 0 1 16 14.625v.25a2.625 2.625 0 0 1-2.625 2.625h-4.75A2.625 2.625 0 0 1 6 14.875v-.25A2.625 2.625 0 0 1 8.625 12M16 13.5h1.5V16H16");
}

.qmptz25oz {
  d: path("m4.422 9.714l5.875-5.011a2.625 2.625 0 0 1 3.406 0l5.875 5.011a2.63 2.63 0 0 1 .922 1.997v6.164a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 17.875v-6.164a2.63 2.63 0 0 1 .922-1.997");
}
</style><g class="hntgybcog"><path class="qmptz25oz"/><path class="nrpxlyb6e"/></g>`,
		"fallback": "uix:battery-home",
	});
}

export default Component;
