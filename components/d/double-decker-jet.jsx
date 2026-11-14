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
		"content": `<style>.wkyjf-bbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 8.5 0 1 0 19 0a9.5 8.5 0 1 0-19 0Zm0 0h19m-15-3h.01M17.5 9h.01M6.5 15h.01m10.99 0h.01");
}
</style><path class="wkyjf-bbg"/>`,
		"fallback": "uix-sharp:double-decker-jet",
	});
}

export default Component;
