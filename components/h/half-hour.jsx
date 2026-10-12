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

.jcisj4bho {
  d: path("M12 6.5a5.5 5.5 0 0 1 0 11Zm0 5.5L8.75 9.25M5.5 12h1.25");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="jcisj4bho"/></g>`,
		"fallback": "iconoven:half-hour",
	});
}

export default Component;
