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
		"content": `<style>.estm5v5ai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.172 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.789 0 1.543.078 2.249.225M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M19 21.5v-5m0 1.5c-2.25 0-3.5-1.5-3.5-3.25C17.75 14.75 19 16 19 18m0-1.5c0-2 1.25-3.5 3-3.5c0 2-1.25 3.5-3 3.5");
}
</style><path class="estm5v5ai"/>`,
		"fallback": "uix:botanist",
	});
}

export default Component;
