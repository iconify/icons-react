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
		"content": `<style>.bs-apz20u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 4a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM17 6.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM19.25 12a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM17 17.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM11.25 20a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM5.5 17.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM3.25 12a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0ZM5.5 6.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}
</style><path class="bs-apz20u"/>`,
		"fallback": "uix-sharp:dots-circle",
	});
}

export default Component;
