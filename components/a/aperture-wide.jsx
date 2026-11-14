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
		"content": `<style>.u8u2sacoa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M18 12l-5.5 9.5m2.5-4.25H4m5 0l-5.5-9.5M6 12l5.5-9.5M9 6.75h11m-5 0l5.5 9.5");
}
</style><path class="u8u2sacoa"/>`,
		"fallback": "uix:aperture-wide",
	});
}

export default Component;
