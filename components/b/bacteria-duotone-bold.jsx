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
		"content": `<style>.c1gddow5o {
  d: path("m8 17 -4 4");
}

.ed5pr-bww {
  d: path("m5 14 6 -6a4 4 0 0 1 6 6l-6 6a4 4 0 0 1 -6 -6");
}

.mt0wfrbec {
  fill: currentColor;
  d: path("m5 14 6 -6a4 4 0 0 1 6 6l-6 6a4 4 0 0 1 -6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wktcpfcga {
  d: path("m17 11 4 -4");
}
</style><g class="s0phu2bbs"><path class="mt0wfrbec"/><path class="ed5pr-bww"/><path class="wktcpfcga"/><path class="c1gddow5o"/></g>`,
		"fallback": "iconmind:bacteria-duotone-bold",
	});
}

export default Component;
