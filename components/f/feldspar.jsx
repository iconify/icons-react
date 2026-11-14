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
		"content": `<style>.brw6obg0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.8 6.6l2.25-3a1.5 1.5 0 0 1 1.2-.6h3.5a1.5 1.5 0 0 1 1.2.6l2.25 3a1.5 1.5 0 0 1 .3.9v6.917a1.5 1.5 0 0 1-.394 1.013l-4 4.364a1.5 1.5 0 0 1-2.212 0l-4-4.364a1.5 1.5 0 0 1-.394-1.013V7.5a1.5 1.5 0 0 1 .3-.9m-.3.4h11M12 7v14");
}
</style><path class="brw6obg0z"/>`,
		"fallback": "uix:feldspar",
	});
}

export default Component;
