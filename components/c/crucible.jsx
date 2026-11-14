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
		"content": `<style>.kgd64sn1o {
  d: path("M7 10.5c2-1 3 1 5 0s3 1 5 0M10 4c-.75-.75.75-1.25 0-2m4 2c-.75-.75.75-1.25 0-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whzvonk0o {
  d: path("M5 6.5h14L17.5 18a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 18Z");
}
</style><g class="ulnmmdpxh"><path class="whzvonk0o"/><path class="kgd64sn1o"/></g>`,
		"fallback": "uix-sharp:crucible",
	});
}

export default Component;
