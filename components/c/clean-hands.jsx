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
		"content": `<style>.vu1bvccex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21c-2.5-1.5-3.5-4-3.5-6.5v-8a2 2 0 0 1 4 0v-2a2 2 0 0 1 4 0V11l2-2a2 2 0 0 1 3 2.5l-3.5 5q-1.5 2.25-1.5 4.5m-4-14.5V11m10.442-7.692l.231.423a1.5 1.5 0 0 0 .596.596l.423.231a.504.504 0 0 1 0 .884l-.423.231a1.5 1.5 0 0 0-.596.596l-.231.423a.504.504 0 0 1-.884 0l-.231-.423a1.5 1.5 0 0 0-.596-.596l-.423-.231a.504.504 0 0 1 0-.884l.423-.231a1.5 1.5 0 0 0 .596-.596l.231-.423a.504.504 0 0 1 .884 0");
}
</style><path class="vu1bvccex"/>`,
		"fallback": "uix:clean-hands",
	});
}

export default Component;
