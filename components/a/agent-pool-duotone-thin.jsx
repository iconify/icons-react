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
		"content": `<style>.djc0efbln {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.77 4.78a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gsa3wh0sx {
  d: path("M17.77 4.78a3 3 0 1 1 -2.54 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jxjfasbfm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17.77 4.78a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.quu8uycwi {
  d: path("M3 14v5h18v-5");
}

.qz-8437-j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 14v5h18v-5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xyeuuzvcq {
  d: path("M8.77 4.78a3 3 0 1 1 -2.54 0");
}
</style><g class="hntgybcog"><path class="djc0efbln"/><path class="jxjfasbfm"/><path class="qz-8437-j"/><path class="xyeuuzvcq"/><path class="gsa3wh0sx"/><path class="quu8uycwi"/></g>`,
		"fallback": "iconmind:agent-pool-duotone-thin",
	});
}

export default Component;
