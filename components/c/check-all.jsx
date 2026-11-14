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
		"content": `<style>.hggn0obqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5L10 11l8-8M6.5 12.5L10 16l8-8M6.5 17.5L10 21l8-8");
}
</style><path class="hggn0obqx"/>`,
		"fallback": "uix-sharp:check-all",
	});
}

export default Component;
