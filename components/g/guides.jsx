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
		"content": `<style>.lnu8_1bht {
  d: path("M2.5 8h15M8 2.5v15");
}

.nqv3ki-eg {
  fill: currentColor;
  d: path("M21.5 5.5v5l-4-2.5Zm-16 16h5l-2.5-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lnu8_1bht"/><path class="nqv3ki-eg"/></g>`,
		"fallback": "uix-sharp:guides",
	});
}

export default Component;
