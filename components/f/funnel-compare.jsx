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
		"content": `<style>.gv46rsb5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h6.75L7 11.5V19l-2.25-1.5v-6Zm12.25 0h6.75l-2.25 6.5V19L17 17.5v-6ZM12 3v18");
}
</style><path class="gv46rsb5v"/>`,
		"fallback": "uix:funnel-compare",
	});
}

export default Component;
