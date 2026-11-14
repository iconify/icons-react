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
		"content": `<style>.s2_li7b9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5a8.5 3 0 1 0 17 0a8.5 3 0 1 0-17 0M7 7.75L3.5 21.5M17 7.75l3.5 13.75M12 8.5v13");
}
</style><path class="s2_li7b9h"/>`,
		"fallback": "uix:camp-stool",
	});
}

export default Component;
