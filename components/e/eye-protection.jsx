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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.igb1qmbxd {
  d: path("M6 10.5h12v3.25a1.75 1.75 0 0 1-1.75 1.75H14l-1-1.25h-2l-1 1.25H7.75A1.75 1.75 0 0 1 6 13.75Z");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="igb1qmbxd"/></g>`,
		"fallback": "iconoven:eye-protection",
	});
}

export default Component;
