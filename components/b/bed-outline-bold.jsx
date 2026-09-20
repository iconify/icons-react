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
		"content": `<style>.et-iwmblh {
  d: path("M2 18v-7h20v7");
}

.f0qz9mbvk {
  d: path("M4 11V7h6v4");
}

.nqnw98byf {
  d: path("M2 14h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3iybibvf {
  d: path("M3 18v2.5");
}

.wbz8a-gmi {
  d: path("M21 18v2.5");
}
</style><g class="s0phu2bbs"><path class="et-iwmblh"/><path class="nqnw98byf"/><path class="f0qz9mbvk"/><path class="t3iybibvf"/><path class="wbz8a-gmi"/></g>`,
		"fallback": "iconmind:bed-outline-bold",
	});
}

export default Component;
