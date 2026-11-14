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
		"content": `<style>.c_wtobcpx {
  fill: currentColor;
  d: path("M17.5 5h4v4h-4Z");
}

.nxe97hb_a {
  d: path("M2.5 2.5h12v19h-12Zm3 4.5h6m-6 4h4m-4 4h6m6-12.5h4v19h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nxe97hb_a"/><path class="c_wtobcpx"/></g>`,
		"fallback": "uix-sharp:code-minimap",
	});
}

export default Component;
