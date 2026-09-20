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
		"content": `<style>.ef626bcbl {
  d: path("M3 17a4 4 0 0 1 8 0");
}

.i49-5fazd {
  d: path("M13 17a4 4 0 0 1 8 0");
}

.myekf3bzc {
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.odx_lab8a {
  d: path("M10 6h4");
}

.rrxso7m3p {
  d: path("M14 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="myekf3bzc"/><path class="ef626bcbl"/><path class="rrxso7m3p"/><path class="i49-5fazd"/><path class="odx_lab8a"/></g>`,
		"fallback": "iconmind:co-op-outline-bold",
	});
}

export default Component;
