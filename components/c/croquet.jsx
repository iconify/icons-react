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
		"content": `<style>.ldkm43but {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h6V19h-6Zm3 0l3-12m0 14.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 4.75V12a2.5 2.5 0 0 1 5 0v9.5");
}
</style><path class="ldkm43but"/>`,
		"fallback": "uix-sharp:croquet",
	});
}

export default Component;
