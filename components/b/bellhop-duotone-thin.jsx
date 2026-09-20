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
		"content": `<style>.b_5ug6ank {
  d: path("M17 20.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.b9bmegbpx {
  fill: currentColor;
  d: path("M17 20.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.c6hn90blm {
  d: path("M8 20.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gg7gi8bfs {
  fill: currentColor;
  d: path("M8 20.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hc853a05m {
  d: path("M7 13.5h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lps9qspxb {
  d: path("M3 3h6");
}

.uw5kuce7r {
  d: path("M3 3v18");
}

.w_x4iohoz {
  fill: currentColor;
  d: path("M7 18V9h13v9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zdricccut {
  d: path("M7 18V9h13v9Z");
}
</style><g class="hntgybcog"><path class="w_x4iohoz"/><path class="gg7gi8bfs"/><path class="b9bmegbpx"/><path class="uw5kuce7r"/><path class="lps9qspxb"/><path class="zdricccut"/><path class="hc853a05m"/><path class="c6hn90blm"/><path class="b_5ug6ank"/></g>`,
		"fallback": "iconmind:bellhop-duotone-thin",
	});
}

export default Component;
