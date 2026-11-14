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
		"content": `<style>.h9p_uac7a {
  d: path("M4 17V9c0-2.5 2-4 4-4h8c2 0 4 1.5 4 4v8");
}

.pbr_27bhi {
  d: path("M4 12h16v5H4Zm2 8.5V17m12 3.5V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h9p_uac7a"/><path class="pbr_27bhi"/></g>`,
		"fallback": "uix-sharp:booth-seating",
	});
}

export default Component;
