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
		"content": `<style>.pa2h90bqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v9m-7 0h14M7.5 15.5h9M10 19h4");
}
</style><path class="pa2h90bqg"/>`,
		"fallback": "uix-sharp:circuit-symbol-ground",
	});
}

export default Component;
