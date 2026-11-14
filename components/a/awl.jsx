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
		"content": `<style>.kjfero6xq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.818 16.646l2.828-2.828a2.5 2.5 0 0 1 3.536 0a2.5 2.5 0 0 1 0 3.536l-2.828 2.828a2.5 2.5 0 0 1-3.536 0a2.5 2.5 0 0 1 0-3.536m6.432-2.896L21 3");
}
</style><path class="kjfero6xq"/>`,
		"fallback": "uix:awl",
	});
}

export default Component;
