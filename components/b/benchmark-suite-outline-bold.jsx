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
		"content": `<style>.c0p3a4scc {
  d: path("M9 11v5");
}

.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.hqoi59sxr {
  d: path("M12 9v7");
}

.lhg9en3sp {
  d: path("M15 13v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="c0p3a4scc"/><path class="hqoi59sxr"/><path class="lhg9en3sp"/></g>`,
		"fallback": "iconmind:benchmark-suite-outline-bold",
	});
}

export default Component;
