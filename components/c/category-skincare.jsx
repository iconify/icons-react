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
		"content": `<style>.irz12pbkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 12h14.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H4.75a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 4.75 12M5 14.5v4q0 3 2.5 3h9q2.5 0 2.5-3v-4M8 12c-1-3.5.5-4.5 4-4.5s5 1 4 4.5M9.25 7.5C9.25 5 10.5 4.25 12 4.25s2.75.75 2.75 3.25M12 4.25c0-1.25 1-1.75 2-1.5");
}
</style><path class="irz12pbkh"/>`,
		"fallback": "uix:category-skincare",
	});
}

export default Component;
