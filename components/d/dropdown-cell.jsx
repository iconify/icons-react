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
		"content": `<style>.pbmrk3btd {
  d: path("m16.75 11.25l1.5 1.5l1.5-1.5M6 12h5");
}

.tce7z28xi {
  d: path("M2.5 7h19v10h-19ZM15 7v10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tce7z28xi"/><path class="pbmrk3btd"/></g>`,
		"fallback": "uix-sharp:dropdown-cell",
	});
}

export default Component;
