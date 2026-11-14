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
		"content": `<style>.hhx2q7b0n {
  d: path("M6 2.5h12v19H6Zm6 4v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zu_c56dfk {
  d: path("M8.75 11.25L12 14.5l3.25-3.25m-4.75 7h3");
}
</style><g class="ulnmmdpxh"><path class="hhx2q7b0n"/><path class="zu_c56dfk"/></g>`,
		"fallback": "uix-sharp:app-install-ad",
	});
}

export default Component;
