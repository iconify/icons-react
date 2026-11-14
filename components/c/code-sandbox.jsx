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
		"content": `<style>.eshuf8bir {
  d: path("M6 3h12v13H6Z");
}

.f-kroobnx {
  d: path("M3 13v5.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V13M10.5 7L8.75 9.5L10.5 12m3-5l1.75 2.5L13.5 12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eshuf8bir"/><path class="f-kroobnx"/></g>`,
		"fallback": "uix-sharp:code-sandbox",
	});
}

export default Component;
