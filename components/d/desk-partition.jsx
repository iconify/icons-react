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
		"content": `<style>.v0wfbgtkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5h19M4 16.5V21m16-4.5V21M12 3za1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1M4.25 7H6.5a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 6.5 12H4.25a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 4.25 7M17.5 7h2.25a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 19.75 12H17.5a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 17.5 7m-12 5v4.5m13-4.5v4.5");
}
</style><path class="v0wfbgtkw"/>`,
		"fallback": "uix:desk-partition",
	});
}

export default Component;
