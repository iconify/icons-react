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
		"content": `<style>.b1glweb4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM17 7L6 18m-2.25 2.25h.01");
}
</style><path class="b1glweb4v"/>`,
		"fallback": "uix-sharp:acupuncture-needles",
	});
}

export default Component;
