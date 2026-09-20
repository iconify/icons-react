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

.sx7ks_bew {
  d: path("M12 15v-3");
}

.wk57_pl6k {
  d: path("M8 20v-5h8v5Z");
}

.z1c0-_btz {
  d: path("M12 5c1 2.5 3 3.5 3 6a3 3 0 1 1 -6 0c0 -2 1.5 -2.5 1.5 -3.5C11 8 12 8 12 5");
}
</style><g class="hntgybcog"><path class="wk57_pl6k"/><path class="sx7ks_bew"/><path class="z1c0-_btz"/></g>`,
		"fallback": "iconmind:burnout-outline-thin",
	});
}

export default Component;
