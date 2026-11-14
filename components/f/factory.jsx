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
		"content": `<style>.w731bdbal {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5v-9l5-3v3l5-3v3h3.5v-8h4v17Zm3.5-5h2m3 0h2");
}
</style><path class="w731bdbal"/>`,
		"fallback": "uix-sharp:factory",
	});
}

export default Component;
