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
		"content": `<style>.azj37obeu {
  d: path("M12 2v10");
}

.gl36igsyx {
  d: path("M13 12c0.5 3 1 6 1.5 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8mnltb8h {
  d: path("M9 12h6c1 3 2 6 3 8H6c1 -2 2 -5 3 -8");
}

.sd20h8b5i {
  d: path("M11 12c-0.5 3 -1 6 -1.5 8");
}
</style><g class="hntgybcog"><path class="azj37obeu"/><path class="j8mnltb8h"/><path class="sd20h8b5i"/><path class="gl36igsyx"/></g>`,
		"fallback": "iconmind:broom-outline-thin",
	});
}

export default Component;
