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

.nucq61c3u {
  d: path("M8 18.25L10.25 16l2 1.75l2.25-2.5");
}

.rq9utgyde {
  d: path("M9.5 3v6.5L4.25 19a1.75 1.75 0 0 0 1.5 2.5h12.5a1.75 1.75 0 0 0 1.5-2.5L14.5 9.5V3M8 3h8");
}
</style><g class="hntgybcog"><path class="rq9utgyde"/><path class="nucq61c3u"/></g>`,
		"fallback": "uix:experiment-tracking",
	});
}

export default Component;
