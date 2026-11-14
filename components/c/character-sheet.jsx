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
		"content": `<style>.tgx030-6f {
  d: path("M3 2.5h18v19H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnjrx-a4k {
  d: path("M7.25 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM6 14.75a3 3 0 0 1 6 0M15 7h3m-3 4h3M6 18.5h12");
}
</style><g class="ulnmmdpxh"><path class="tgx030-6f"/><path class="xnjrx-a4k"/></g>`,
		"fallback": "uix-sharp:character-sheet",
	});
}

export default Component;
