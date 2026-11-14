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

.ktc-bccqk {
  d: path("m13.061 3.561l7.378 7.378a1.5 1.5 0 0 1 0 2.122l-7.378 7.378a1.5 1.5 0 0 1-2.122 0l-7.378-7.378a1.5 1.5 0 0 1 0-2.122l7.378-7.378a1.5 1.5 0 0 1 2.122 0");
}

.tzslzyb2o {
  d: path("M12 6.25c1.5 1.5 2 2.25 2 3a2 2 0 0 1-4 0c0-.75.5-1.5 2-3m-1.75 9.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="ktc-bccqk"/><path class="tzslzyb2o"/></g>`,
		"fallback": "uix:hazard-class-5",
	});
}

export default Component;
