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
		"content": `<style>.npp3hwbsn {
  d: path("M5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgbstdrbw {
  d: path("M12 9.25C10.75 7 9 6 7 6c-2.75 0-4.5 2.75-4.5 6s1.75 6 4.5 6c2 0 3.75-1 5-3.25C13.25 17 15 18 17 18c2.75 0 4.5-2.75 4.5-6S19.75 6 17 6c-2 0-3.75 1-5 3.25Z");
}
</style><g class="ulnmmdpxh"><path class="zgbstdrbw"/><path class="npp3hwbsn"/></g>`,
		"fallback": "uix-sharp:cell-division",
	});
}

export default Component;
