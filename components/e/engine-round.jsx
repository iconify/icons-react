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
		"content": `<style>.ceo5crbep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 14v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-3l-2-4H7a1 1 0 0 1-1-1v-4l3-3h4l2 4h2a1 1 0 0 0 1-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zM9 4h4m-2 0v4m-8 3v4m0-2h3");
}
</style><path class="ceo5crbep"/>`,
		"fallback": "coolicons:engine-round",
	});
}

export default Component;
