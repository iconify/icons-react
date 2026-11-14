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
		"content": `<style>.o6w9_ccpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5h9V21H3Zm9 0h9V21h-9ZM7.5 4h9v8.5h-9ZM12 4v3");
}
</style><path class="o6w9_ccpk"/>`,
		"fallback": "uix-sharp:declutter",
	});
}

export default Component;
