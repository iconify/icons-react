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
		"content": `<style>.ti0qoab0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4.5h13l-6 12h-13Zm-6 15h19m-9.75-15l-6 12M15 4.5l-6 12m9.25-12l-6 12");
}
</style><path class="ti0qoab0v"/>`,
		"fallback": "uix-sharp:field-fallow",
	});
}

export default Component;
