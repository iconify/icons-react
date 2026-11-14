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
		"content": `<style>.xzifd361e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11a8.5 8.5 0 0 1 17 0Zm0 0l6.25 5.5M20.5 11l-6.25 5.5M12 11v5.5m-.75 0h1.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 12.75 21h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="xzifd361e"/>`,
		"fallback": "uix:dropper",
	});
}

export default Component;
