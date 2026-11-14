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
		"content": `<style>.o3lig9bgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5c3 2 4.5 4.5 4.5 7c0 2-1 3.5-2.5 4h-4c-1.5-.5-2.5-2-2.5-4c0-2.5 1.5-5 4.5-7m-2 11L8.5 19m5.5-4.5l1.5 4.5m-8.75 0h10.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H6.75a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 6.75 19m8-12.75l-3.5 3.5");
}
</style><path class="o3lig9bgq"/>`,
		"fallback": "uix:chess-bishop",
	});
}

export default Component;
