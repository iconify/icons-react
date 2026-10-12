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
		"content": `<style>.gyds-1b5g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z2kxtnbxu {
  cx: 6px;
  cy: 6px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7s_qnryn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.4 8.4l8.1 8.1m-.47.72l1.19-1.19q.53-.53 1.06 0l2.44 2.44q.53.53 0 1.06l-1.19 1.19q-.53.53-1.06 0l-2.44-2.44q-.53-.53 0-1.06");
}
</style><g class="y9tr6bcfx"><circle class="z2kxtnbxu"/><path class="gyds-1b5g"/><path class="z7s_qnryn"/></g>`,
		"fallback": "iconoven:dipstick",
	});
}

export default Component;
