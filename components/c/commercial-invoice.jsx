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
		"content": `<style>.fl4xkroox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h14v17L16 19l-2.5 1.5L11 19l-3 1.5L5 19ZM8.5 8h7m-7 3.5h7m-7 3.5h4");
}
</style><path class="fl4xkroox"/>`,
		"fallback": "uix-sharp:commercial-invoice",
	});
}

export default Component;
