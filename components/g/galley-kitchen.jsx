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
		"content": `<style>.ae2hq-bsy {
  d: path("M2.5 2.5h8v19h-8Zm13.5 0h5.5v19H16Z");
}

.suklk_vnw {
  d: path("M5 6h3v5.5H5ZM2.5 8.75H5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ae2hq-bsy"/><path class="suklk_vnw"/></g>`,
		"fallback": "uix-sharp:galley-kitchen",
	});
}

export default Component;
