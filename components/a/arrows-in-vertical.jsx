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
		"content": `<style>.f-3xb1blo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12h.01M12 2.5v6m3-3l-3 3l-3-3m3 16v-6m3 3l-3-3l-3 3");
}
</style><path class="f-3xb1blo"/>`,
		"fallback": "uix-sharp:arrows-in-vertical",
	});
}

export default Component;
