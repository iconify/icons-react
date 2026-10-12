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
		"content": `<style>.lcltgt-je {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7h5q1 0 1.26.97l2.98 11.06Q17 20 16 20H4q-1 0-.74-.97L6.24 7.97Q6.5 7 7.5 7m1 0V5.25a1.5 1.5 0 0 1 3 0V7M3.81 17h12.38m5.06-14L17 7.25");
}
</style><path class="lcltgt-je"/>`,
		"fallback": "iconoven:cowbell",
	});
}

export default Component;
