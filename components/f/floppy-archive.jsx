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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nm2vcvi7u {
  d: path("M9.5 5.5V9h6V5.5m-6 16V15h8v6.5");
}

.u2bz_abgl {
  d: path("M8 5.5h9l4 4v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2");
}

.v0dherhqk {
  d: path("M3 17V4.5a2 2 0 0 1 2-2h10");
}
</style><g class="hntgybcog"><path class="v0dherhqk"/><path class="u2bz_abgl"/><path class="nm2vcvi7u"/></g>`,
		"fallback": "uix:floppy-archive",
	});
}

export default Component;
