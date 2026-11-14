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
		"content": `<style>.zt9-nqjsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9.75h6.5V21.5H4Zm9.5 0H20V21.5h-6.5ZM9.5 7a3.5 3.5 0 0 1 5 0M8 4.5a6.5 6.5 0 0 1 8 0");
}
</style><path class="zt9-nqjsw"/>`,
		"fallback": "uix-sharp:door-closing-warning",
	});
}

export default Component;
