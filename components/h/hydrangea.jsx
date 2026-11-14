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
		"content": `<style>.k21naebip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 9.5a2.5 2.5 0 0 1-1.75 4.25A2.5 2.5 0 0 1 12 15.5a2.5 2.5 0 0 1-4.25-1.75A2.5 2.5 0 0 1 6 9.5a2.5 2.5 0 0 1 1.75-4.25A2.5 2.5 0 0 1 12 3.5a2.5 2.5 0 0 1 4.25 1.75A2.5 2.5 0 0 1 18 9.5m-6 6V21m0 0q3-2.5 6.5-2M12 21q-3-2.5-6.5-2M9.75 8.25h.01m4.49 0h.01M12 12h.01");
}
</style><path class="k21naebip"/>`,
		"fallback": "uix:hydrangea",
	});
}

export default Component;
