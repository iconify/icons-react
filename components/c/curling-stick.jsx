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
		"content": `<style>.nmz4p9bth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v14m-4 0h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2a2 2 0 0 1 2-2");
}
</style><path class="nmz4p9bth"/>`,
		"fallback": "uix:curling-stick",
	});
}

export default Component;
