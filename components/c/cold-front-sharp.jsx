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
		"content": `<style>.c8h3uz4fu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 20.5l1.97-1.97m3.54-3.54l1.22-1.22m3.54-3.54l1.22-1.22m3.54-3.54L20.5 3.5M5.35 18.04l-.99-3.8l-.13-.49l.49.13l3.8.99l.49.12l-.36.36l-2.82 2.82l-.36.36zm4.76-4.76l-.99-3.8l-.13-.49l.49.13l3.8.99l.49.12l-.36.36l-2.82 2.82l-.36.36zm4.76-4.76l-.99-3.8l-.13-.49l.49.13l3.8.99l.49.12l-.36.36l-2.82 2.82l-.36.36z");
}
</style><path class="c8h3uz4fu"/>`,
		"fallback": "iconoven:cold-front-sharp",
	});
}

export default Component;
