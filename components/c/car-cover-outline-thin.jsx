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
		"content": `<style>.a3eibhdgt {
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j6_bngbnz {
  d: path("M15 18.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.p47b7s_df {
  d: path("M7 18.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uct8v-rdb {
  d: path("M4.5 18v-3L7 12.5h7.5L17 15h2.5v3");
}

.z26gfvqcs {
  d: path("M4.5 9.5h15");
}
</style><g class="hntgybcog"><path class="a3eibhdgt"/><path class="z26gfvqcs"/><path class="uct8v-rdb"/><path class="p47b7s_df"/><path class="j6_bngbnz"/></g>`,
		"fallback": "iconmind:car-cover-outline-thin",
	});
}

export default Component;
