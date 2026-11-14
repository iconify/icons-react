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
		"content": `<style>.oix9chb-t {
  d: path("M8.5 3h7v4.5h-7Zm.257 12.621l6.364-6.364l2.122 2.122l-6.364 6.364Z");
}

.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.tt-xyrb2n {
  d: path("m8.757 15.621l2.122 2.122l-3.536 1.414Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="re3nbbcdl"/><path class="oix9chb-t"/><path class="tt-xyrb2n"/></g>`,
		"fallback": "uix-sharp:dive-slate",
	});
}

export default Component;
