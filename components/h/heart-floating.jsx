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
		"content": `<style>.x5rtjdbbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5a2.25 2.25 0 0 1 4.5 0a2.25 2.25 0 0 1 4.5 0L7 20Zm8-6a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 3 0l-3 3Zm7-5.5a1 1 0 0 1 2 0a1 1 0 0 1 2 0l-2 2Z");
}
</style><path class="x5rtjdbbr"/>`,
		"fallback": "uix:heart-floating",
	});
}

export default Component;
