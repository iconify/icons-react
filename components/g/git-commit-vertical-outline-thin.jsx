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
		"content": `<style>.cktduhxcf {
  d: path("M8.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.f018rabbl {
  d: path("M12 15.5V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.na_sj_b_j {
  d: path("M12 3v5.5");
}
</style><g class="hntgybcog"><path class="na_sj_b_j"/><path class="cktduhxcf"/><path class="f018rabbl"/></g>`,
		"fallback": "iconmind:git-commit-vertical-outline-thin",
	});
}

export default Component;
