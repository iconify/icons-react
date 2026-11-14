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
		"content": `<style>.mfy0g7jdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2v5.5M8 21l4-6.5l4 6.5m-.641-17.359a4.75 4.75 0 0 1 0 6.718m-6.718 0a4.75 4.75 0 0 1 0-6.718M18.928 3a8 8 0 0 1 0 8M5.072 11a8 8 0 0 1 0-8");
}
</style><path class="mfy0g7jdw"/>`,
		"fallback": "uix-sharp:antenna-transmit",
	});
}

export default Component;
