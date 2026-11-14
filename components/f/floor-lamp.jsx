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
		"content": `<style>.bxt_y765a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.261 3h5.478a1.75 1.75 0 0 1 1.66 1.197l.833 2.5A1.75 1.75 0 0 1 15.572 9H8.428a1.75 1.75 0 0 1-1.66-2.303l.833-2.5A1.75 1.75 0 0 1 9.261 3M12 9v12m-4 0h8");
}
</style><path class="bxt_y765a"/>`,
		"fallback": "uix:floor-lamp",
	});
}

export default Component;
