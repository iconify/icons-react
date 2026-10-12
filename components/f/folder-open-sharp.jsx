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
		"content": `<style>.ba59rfbqa {
  d: path("M2.75 12V4.75h7.1l.6.8L11.55 7l.6.8h7.1v3");
}

.t1i0_tl_g {
  d: path("M7.5 10.75h13.75l-.42 1.18l-2.16 6.14l-.42 1.18H2.75l.48-1.16l2.54-6.18l.48-1.16z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ba59rfbqa"/><path class="t1i0_tl_g"/></g>`,
		"fallback": "iconoven:folder-open-sharp",
	});
}

export default Component;
