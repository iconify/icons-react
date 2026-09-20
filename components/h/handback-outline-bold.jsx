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
		"content": `<style>.f-l8xfbfx {
  d: path("M10.5 11H13v2.5");
}

.gsf5khfvc {
  d: path("M16 10a3 3 0 0 1 6 0");
}

.imjw6lo4s {
  d: path("M8.5 15.5 11 13");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yr5tx9l0o {
  d: path("M17 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zq_pavbka {
  d: path("M7.27 15.28a3 3 0 1 1 -2.54 0");
}
</style><g class="s0phu2bbs"><path class="zq_pavbka"/><path class="imjw6lo4s"/><path class="f-l8xfbfx"/><path class="yr5tx9l0o"/><path class="gsf5khfvc"/></g>`,
		"fallback": "iconmind:handback-outline-bold",
	});
}

export default Component;
