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

.lp475fcdg {
  d: path("M2.5 20.5h19V4h-8l-5 16.5");
}

.qco5sfvdy {
  d: path("M17.5 4L16 8.5l2.5 3l-1.75 4");
}
</style><g class="hntgybcog"><path class="lp475fcdg"/><path class="qco5sfvdy"/></g>`,
		"fallback": "uix:highwall-crack",
	});
}

export default Component;
