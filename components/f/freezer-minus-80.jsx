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
		"content": `<style>.elzya7bra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13v19h-13Zm0 4h13M12 10.25v8m-3.5-6l7 4m-7 0l7-4");
}
</style><path class="elzya7bra"/>`,
		"fallback": "uix-sharp:freezer-minus-80",
	});
}

export default Component;
