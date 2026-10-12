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
		"content": `<style>.cooayjbil {
  width: 11px;
  height: 8.25px;
  x: 6.5px;
  y: 13px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m6nkjhiin {
  d: path("M12 13v3");
}

.w5ei5jb_b {
  d: path("M12.75 5H19a1.25 1.25 0 0 1 0 2.5h-6.25l-3 2.75h-2l1.5-2.75h-3.5L4.5 8.75H2.75l.5-2.5l-.5-2.5H4.5L5.75 5h3.5l-1.5-2.25h2Z");
}
</style><g class="hntgybcog"><path class="w5ei5jb_b"/><rect class="cooayjbil"/><path class="m6nkjhiin"/></g>`,
		"fallback": "iconoven:air-freight",
	});
}

export default Component;
