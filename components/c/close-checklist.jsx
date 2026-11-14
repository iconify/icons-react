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
		"content": `<style>.beo2o-b5w {
  fill: currentColor;
  d: path("M7.5 9.5h2v2h-2Z");
}

.dn8bfabzs {
  d: path("M8.5 3h7v4.5h-7Z");
}

.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vuszc-7qn {
  d: path("M7.5 13.25h2v2h-2Zm0 3.75h2v2h-2Zm5-6.5h4m-4 3.75h4m-4 3.75H15");
}
</style><g class="ulnmmdpxh"><path class="re3nbbcdl"/><path class="dn8bfabzs"/><path class="beo2o-b5w"/><path class="vuszc-7qn"/></g>`,
		"fallback": "uix-sharp:close-checklist",
	});
}

export default Component;
