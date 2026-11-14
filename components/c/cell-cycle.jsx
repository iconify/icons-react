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
		"content": `<style>.buny-nbzt {
  d: path("M18.75 2.75v2.5h-2.5m-4.25 5a3 3 0 1 0 0 3.5a3 3 0 1 0 0-3.5Z");
}

.d4f7esbvm {
  d: path("M21.5 12a9.5 9.5 0 1 1-2.75-6.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d4f7esbvm"/><path class="buny-nbzt"/></g>`,
		"fallback": "uix-sharp:cell-cycle",
	});
}

export default Component;
