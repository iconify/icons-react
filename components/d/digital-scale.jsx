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
		"content": `<style>.jt_ubmb4h {
  d: path("M8 11.75h8v2.75H8Zm-2.5 5.5V19m13-1.75V19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wre4swbhy {
  d: path("M6 5.5h12L21.5 9v6.75a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5V9ZM2.5 9h19");
}
</style><g class="ulnmmdpxh"><path class="wre4swbhy"/><path class="jt_ubmb4h"/></g>`,
		"fallback": "uix-sharp:digital-scale",
	});
}

export default Component;
