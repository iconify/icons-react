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
		"content": `<style>.mikusrbxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10h15v11h-15ZM8 10V7a4 4 0 0 1 8 0v3m-4 3v2.25M12 18h.01");
}
</style><path class="mikusrbxo"/>`,
		"fallback": "uix-sharp:alert-lock",
	});
}

export default Component;
