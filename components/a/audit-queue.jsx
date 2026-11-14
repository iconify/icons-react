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
		"content": `<style>.hflyywb_z {
  d: path("M5.25 8.5v-.75a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v11H13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hudqbk_1g {
  d: path("M8 5.75V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v11h-2.75M5.5 15h5m-2-2.25L10.75 15L8.5 17.25");
}

.vlybhkkky {
  d: path("M6 8.5h4a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-6A3.5 3.5 0 0 1 6 8.5");
}
</style><g class="hntgybcog"><path class="vlybhkkky"/><path class="hflyywb_z"/><path class="hudqbk_1g"/></g>`,
		"fallback": "uix:audit-queue",
	});
}

export default Component;
