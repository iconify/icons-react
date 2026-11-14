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
		"content": `<style>.ehv5k_5zm {
  d: path("M3 4h18l-1.5 13.5A2.5 2.5 0 0 1 17 20H7a2.5 2.5 0 0 1-2.5-2.5Zm.5 3.75h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zy-hl0x7e {
  d: path("M9.25 13h5.5v4h-5.5Zm1.25 0v-.5a1.5 1.5 0 0 1 3 0v.5");
}
</style><g class="ulnmmdpxh"><path class="ehv5k_5zm"/><path class="zy-hl0x7e"/></g>`,
		"fallback": "uix-sharp:bucket-private",
	});
}

export default Component;
