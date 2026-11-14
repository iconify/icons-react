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
		"content": `<style>.cyogezbuw {
  d: path("M7 7h9v9H7Z");
}

.ebq405bqc {
  d: path("M18.25 6.75L20 5l1.75 1.75");
}

.judnzd-wr {
  d: path("M7.5 20h9a3.5 3.5 0 0 0 3.5-3.5V5");
}

.piqj5v7wx {
  d: path("M2.5 2.5H12V12H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="piqj5v7wx"/><path class="cyogezbuw"/><path class="judnzd-wr"/><path class="ebq405bqc"/></g>`,
		"fallback": "uix-sharp:frame-wrap",
	});
}

export default Component;
