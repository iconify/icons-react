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
		"content": `<style>.suxarcb4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v4H3Zm3 7h12v4H6Zm-1.5 7h15v4h-15Z");
}
</style><path class="suxarcb4o"/>`,
		"fallback": "uix-sharp:frame-auto-layout",
	});
}

export default Component;
