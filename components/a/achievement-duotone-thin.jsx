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
		"content": `<style>.c_s6h8ded {
  fill: currentColor;
  d: path("M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ch_tk3bzx {
  fill: currentColor;
  d: path("M8 13v8l4 -4 4 4v-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qx-0bqbqu {
  d: path("M8 13v8l4 -4 4 4v-8Z");
}

.uku_albgb {
  d: path("m10 8 2 -2v6");
}

.w_lu3fbkz {
  d: path("M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9");
}
</style><g class="hntgybcog"><path class="c_s6h8ded"/><path class="ch_tk3bzx"/><path class="w_lu3fbkz"/><path class="qx-0bqbqu"/><path class="uku_albgb"/></g>`,
		"fallback": "iconmind:achievement-duotone-thin",
	});
}

export default Component;
