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
		"content": `<style>.promi4brw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13h11a3.25 3.25 0 0 0 0-6.5A5.5 5.5 0 0 0 7 7a3 3 0 0 0-.5 6Zm5.5 0v2.75m-9 0h18v5.5H3Zm3.75 2.75h.01m5.74 0h5");
}
</style><path class="promi4brw"/>`,
		"fallback": "uix-sharp:cloud-server",
	});
}

export default Component;
