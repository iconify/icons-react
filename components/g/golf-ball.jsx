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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.gm_38vv4b {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 7.75h.01m4.49 0h.01M7.5 12h.01M12 12h.01m4.49 0h.01m-6.76 4.25h.01m4.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="c6vt1lbds"/><path class="gm_38vv4b"/></g>`,
		"fallback": "iconoven:golf-ball",
	});
}

export default Component;
