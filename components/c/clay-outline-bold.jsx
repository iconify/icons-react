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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tuz1ao15a {
  d: path("M4 14C4 8 8 4 12 4c5 0 8 5 8 9s-3 5 -8 5 -8 0 -8 -4");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="s0phu2bbs"><path class="tuz1ao15a"/><path class="xslfg2evh"/></g>`,
		"fallback": "iconmind:clay-outline-bold",
	});
}

export default Component;
