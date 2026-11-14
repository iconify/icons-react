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
		"content": `<style>.e4-58qhir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6H8v12H2.5ZM16 6h5.5v12H16Zm-6.75 5h5.5v5h-5.5Zm1 0V9.75a1.75 1.75 0 0 1 3.5 0V11");
}
</style><path class="e4-58qhir"/>`,
		"fallback": "uix-sharp:end-to-end-encryption",
	});
}

export default Component;
