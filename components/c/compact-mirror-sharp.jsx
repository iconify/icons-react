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
		"content": `<style>.ix1rbnbtt {
  cx: 12px;
  cy: 8px;
  r: 5.25px;
}

.vgmnt0b-f {
  d: path("M14.75 8a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 1 1 5.5 0m-10 7.5h14.5v5.75H4.75zm3.75 3h7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ix1rbnbtt"/><path class="vgmnt0b-f"/></g>`,
		"fallback": "iconoven:compact-mirror-sharp",
	});
}

export default Component;
