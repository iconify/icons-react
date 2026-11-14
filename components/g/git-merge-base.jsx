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

.hrwdc6bcf {
  d: path("M4 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.kffxb8bqs {
  fill: currentColor;
  d: path("M10 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.wsa8k1bzc {
  d: path("M6 7v1.5c0 3 6 3.5 6 6.5v2m6-10v1.5c0 3-6 3.5-6 6.5");
}
</style><g class="hntgybcog"><path class="hrwdc6bcf"/><path class="wsa8k1bzc"/><path class="kffxb8bqs"/></g>`,
		"fallback": "uix:git-merge-base",
	});
}

export default Component;
