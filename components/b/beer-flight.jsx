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
		"content": `<style>.mf-03pabp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h19v3h-19Zm1.25-8.5H7.5L7 15H4.25Zm6.5 0H14l-.5 8.5h-2.75Zm6.5 0h3.75L20 15h-2.75Z");
}
</style><path class="mf-03pabp"/>`,
		"fallback": "uix-sharp:beer-flight",
	});
}

export default Component;
