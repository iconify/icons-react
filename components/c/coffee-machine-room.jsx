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
		"content": `<style>.sqac3lbyh {
  d: path("M4 3h16v5H8v10h12v3H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wfp6attlx {
  d: path("M12.5 11h5v1.5L19 16v2h-8v-2l1.5-3.5Z");
}
</style><g class="ulnmmdpxh"><path class="sqac3lbyh"/><path class="wfp6attlx"/></g>`,
		"fallback": "uix-sharp:coffee-machine-room",
	});
}

export default Component;
