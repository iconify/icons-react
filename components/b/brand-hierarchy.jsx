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
		"content": `<style>.nz1j2qbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7V8h-7ZM2.5 16h7v5.5h-7Zm12 0h7v5.5h-7ZM12 8v4m-6 4v-4h12v4");
}
</style><path class="nz1j2qbth"/>`,
		"fallback": "uix-sharp:brand-hierarchy",
	});
}

export default Component;
