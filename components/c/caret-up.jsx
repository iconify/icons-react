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
		"content": `<style>.nw6ofjypm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15.75h12c.9 0 1.35-1.1.7-1.7l-6-5.6a1 1 0 0 0-1.4 0l-6 5.6c-.65.6-.2 1.7.7 1.7");
}
</style><path class="nw6ofjypm"/>`,
		"fallback": "iconoven:caret-up",
	});
}

export default Component;
