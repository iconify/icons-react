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
		"content": `<style>.u5vyng2qo {
  d: path("M11.75 13A1.25 1.25 0 1 1 13 14.25v2.25a2.25 2.25 0 0 1-4.5 0l1.5-1.25");
}

.uhuk8q3si {
  d: path("M2.5 9.5h19V19a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Zm0 0l2-6h15l2 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uhuk8q3si"/><path class="u5vyng2qo"/></g>`,
		"fallback": "uix-sharp:fly-box",
	});
}

export default Component;
