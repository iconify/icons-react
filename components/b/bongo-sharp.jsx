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
		"content": `<style>.kx-9d113h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5h7l-.07 1l-.86 12.75l-.07 1h-6l-.07-1L2.82 6l-.07-1zm10.5 3h7l-.08 1l-.84 9.75l-.08 1h-6l-.08-1L13.33 9l-.08-1zm-4.04 5h3.47");
}
</style><path class="kx-9d113h"/>`,
		"fallback": "iconoven:bongo-sharp",
	});
}

export default Component;
