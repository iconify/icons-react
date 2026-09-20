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
		"content": `<style>.d1zyr9bfc {
  d: path("M12 4v4");
}

.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qu79-qujw {
  d: path("M5 15a7 7 0 0 1 14 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xmopbdc-t {
  d: path("M5 15h14");
}
</style><g class="s0phu2bbs"><path class="qu79-qujw"/><path class="xmopbdc-t"/><path class="d1zyr9bfc"/><path class="if5ft31dv"/></g>`,
		"fallback": "iconmind:alert-outline-bold",
	});
}

export default Component;
