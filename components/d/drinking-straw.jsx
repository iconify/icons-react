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
		"content": `<style>.p61dzbcxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.364 3.515l2.121 2.121L5.636 20.485l-2.121-2.121Zm-3.889 3.889l.707 3.535m-3.536-.707l.708 3.536m-3.536-.707l.707 3.535");
}
</style><path class="p61dzbcxe"/>`,
		"fallback": "uix-sharp:drinking-straw",
	});
}

export default Component;
