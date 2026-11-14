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
		"content": `<style>.zvdremb7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v14h-19Zm0 7h19M7.25 12v7M12 12v7m4.75-7v7M6.5 8.5h.01m3.49 0h.01");
}
</style><path class="zvdremb7t"/>`,
		"fallback": "uix-sharp:groovebox",
	});
}

export default Component;
