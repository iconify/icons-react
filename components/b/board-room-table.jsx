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
		"content": `<style>.atk9tsaml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8.75h14.5A1.25 1.25 0 0 1 20.5 10v4a1.25 1.25 0 0 1-1.25 1.25H4.75A1.25 1.25 0 0 1 3.5 14v-4a1.25 1.25 0 0 1 1.25-1.25ZM6.5 6H10m4 0h3.5m-11 12H10m4 0h3.5");
}
</style><path class="atk9tsaml"/>`,
		"fallback": "uix-sharp:board-room-table",
	});
}

export default Component;
