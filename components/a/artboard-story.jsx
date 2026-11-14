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
		"content": `<style>.fwy8kqw0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.125 5.25h3.75A2.625 2.625 0 0 1 16.5 7.875v10.75a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 7.5 18.625V7.875a2.625 2.625 0 0 1 2.625-2.625M7.5 2.5H11M10.25 8h3.5");
}
</style><path class="fwy8kqw0z"/>`,
		"fallback": "uix:artboard-story",
	});
}

export default Component;
