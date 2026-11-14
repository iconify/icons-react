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
		"content": `<style>.xvyxa7btt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5h18c0 3-4 4.5-9 4.5s-9-1.5-9-4.5m10.5 0l2-2.5c1-1.25 2-1.5 3-1.5l.25-1.25A1.75 1.75 0 0 1 21.5 6l-1 2c-.25 1.5-1 2.5-2.5 2.5ZM12 15v5m-4 0h8");
}
</style><path class="xvyxa7btt"/>`,
		"fallback": "uix:bird-bath",
	});
}

export default Component;
