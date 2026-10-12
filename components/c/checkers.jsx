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
		"content": `<style>.d8mt2_n-r {
  cx: 12px;
  cy: 12px;
  r: 6.25px;
}

.dbgvcxwad {
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

.t9p0odz9x {
  d: path("m9.67 13.26l-.34-2.27q-.08-.49.3-.17l.74.61q.38.32.64-.1l.73-1.16q.26-.42.52 0l.73 1.16q.26.42.64.1l.74-.61q.38-.32.3.17l-.34 2.27q-.08.49-.58.49h-3.5q-.5 0-.58-.49");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><circle class="d8mt2_n-r"/><path class="t9p0odz9x"/></g>`,
		"fallback": "iconoven:checkers",
	});
}

export default Component;
