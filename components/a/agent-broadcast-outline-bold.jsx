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
		"content": `<style>.gjq7qdjci {
  d: path("M15.25 6.37a6.5 6.5 0 0 1 0 11.26");
}

.lf7-wkbzn {
  d: path("M17 3.34a10 10 0 0 1 0 17.32");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v_swcusij {
  d: path("M13.27 9.28a3 3 0 1 1 -2.54 0");
}

.wm3wqu-9e {
  d: path("M8.75 17.63a6.5 6.5 0 0 1 0 -11.26");
}

.zllo9xxih {
  d: path("M7 20.66A10 10 0 0 1 7 3.34");
}
</style><g class="s0phu2bbs"><path class="v_swcusij"/><path class="gjq7qdjci"/><path class="wm3wqu-9e"/><path class="lf7-wkbzn"/><path class="zllo9xxih"/></g>`,
		"fallback": "iconmind:agent-broadcast-outline-bold",
	});
}

export default Component;
