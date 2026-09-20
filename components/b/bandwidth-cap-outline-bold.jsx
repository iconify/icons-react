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
		"content": `<style>.ml3aqbbkk {
  d: path("M4 8v12");
}

.pq2hynbuc {
  d: path("m6 18 4 -4 3 3 6 -6");
}

.rw2cw9fuy {
  d: path("M4 20h17");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xf07dvr8m {
  d: path("M2 5h20");
}
</style><g class="s0phu2bbs"><path class="xf07dvr8m"/><path class="ml3aqbbkk"/><path class="rw2cw9fuy"/><path class="pq2hynbuc"/></g>`,
		"fallback": "iconmind:bandwidth-cap-outline-bold",
	});
}

export default Component;
