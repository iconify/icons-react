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
		"content": `<style>.ssqzbcc6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.237 21H3.5c-.6 0-1-.4-1-1c0-2.5 2.5-4.5 5.5-4.5c1.187 0 2.297.313 3.203.847M4.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM14 14.5h8v7h-8Zm0 2.75h8");
}
</style><path class="ssqzbcc6m"/>`,
		"fallback": "uix-sharp:guest-checkout",
	});
}

export default Component;
