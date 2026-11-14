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
		"content": `<style>.qotdj5bie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7l-1 10.5c-.25 1.5-1.25 2-2.5 2s-2.25-.5-2.5-2ZM12 15v6.5m-3.5 0h7M12 6.5h.01m-.01 4h.01");
}
</style><path class="qotdj5bie"/>`,
		"fallback": "uix:champagne-glass",
	});
}

export default Component;
