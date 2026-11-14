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
		"content": `<style>.o5v5-_mep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9C3 11 3 21.5 8 21.5h5c5 0 5-10.5-1.5-12.5Zm0 0L7 4.5h7L11.5 9m0 0l5.25-2m0-.5a2.25 3 0 1 0 4.5 0a2.25 3 0 1 0-4.5 0Z");
}
</style><path class="o5v5-_mep"/>`,
		"fallback": "uix-sharp:finds-bag",
	});
}

export default Component;
