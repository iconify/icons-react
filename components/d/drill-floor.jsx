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
		"content": `<style>.fvcj_f9vj {
  d: path("m2 19l3-8h14l3 8Z");
}

.ow5sthuwv {
  d: path("M7.5 15a4.5 1.25 0 1 0 9 0a4.5 1.25 0 1 0-9 0Zm3-13v13m3-13v13M4 19v3m16-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fvcj_f9vj"/><path class="ow5sthuwv"/></g>`,
		"fallback": "uix-sharp:drill-floor",
	});
}

export default Component;
