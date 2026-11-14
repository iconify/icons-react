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
		"content": `<style>.tnzceqa9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.575 16.596l5.657-5.657l2.829 2.829l-5.657 5.657Zm7.071-4.242l7.779-7.779M7.404 13.768l2.828 2.828");
}
</style><path class="tnzceqa9d"/>`,
		"fallback": "uix-sharp:ball-needle",
	});
}

export default Component;
