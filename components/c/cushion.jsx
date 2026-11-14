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
		"content": `<style>.zhy4kfb3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4q8 2 16 0q-2 8 0 16q-8-2-16 0q2-8 0-16Zm8 8h.01");
}
</style><path class="zhy4kfb3o"/>`,
		"fallback": "uix-sharp:cushion",
	});
}

export default Component;
