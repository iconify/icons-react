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
		"content": `<style>.dmqykgboa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19m-17 0V8m15-3.5V8M4.25 8h15.5a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 4.25 8m.25 5.5v7h15v-7m-10-2.75h5M9.5 17h5");
}
</style><path class="dmqykgboa"/>`,
		"fallback": "uix:desk-drawer",
	});
}

export default Component;
