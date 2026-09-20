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
		"content": `<style>.a3hsakflq {
  d: path("M6 16V8a6 6 0 0 1 12 0v8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vslz5yb3q {
  d: path("M6 12h12");
}

.x6vx8fhgp {
  d: path("M3 20.5A1.5 1.5 0 0 1 4.5 19h15a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5h-15A1.5 1.5 0 0 1 3 20.5");
}
</style><g class="s0phu2bbs"><path class="a3hsakflq"/><path class="vslz5yb3q"/><path class="x6vx8fhgp"/></g>`,
		"fallback": "iconmind:backpacking-outline-bold",
	});
}

export default Component;
