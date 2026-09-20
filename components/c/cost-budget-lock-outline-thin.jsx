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
		"content": `<style>.gzes1rhcl {
  d: path("M12 13.5v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r9il7jbjw {
  d: path("M9 15.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.xfs8wlfhn {
  d: path("M5 11.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.ygr1bbcag {
  d: path("M8 9.5a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="xfs8wlfhn"/><path class="ygr1bbcag"/><path class="r9il7jbjw"/><path class="gzes1rhcl"/></g>`,
		"fallback": "iconmind:cost-budget-lock-outline-thin",
	});
}

export default Component;
