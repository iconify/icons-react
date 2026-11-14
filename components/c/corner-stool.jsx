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
		"content": `<style>.a2d9ax7jg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9V7.5c0-3 16-3 16 0V9Zm2.5 0L4 19.5M12 9v10.5M17.5 9L20 19.5");
}
</style><path class="a2d9ax7jg"/>`,
		"fallback": "uix:corner-stool",
	});
}

export default Component;
