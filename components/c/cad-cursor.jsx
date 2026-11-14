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
		"content": `<style>.dzlnpndhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v7m0 5v7M2.5 12h7m5 0h7m-12-2.5h5v5h-5ZM15 15l6 2.5l-3 .5l-.5 3Z");
}
</style><path class="dzlnpndhj"/>`,
		"fallback": "uix-sharp:cad-cursor",
	});
}

export default Component;
