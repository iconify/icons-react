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

.iu91ib-mt {
  d: path("m6 8 3 -3h6l3 3");
}

.o7w846b2d {
  d: path("M13 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.p-3tqnbzb {
  d: path("M9 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.t2m3fqb7m {
  d: path("M6 21V8h12v13Z");
}
</style><g class="hntgybcog"><path class="t2m3fqb7m"/><path class="iu91ib-mt"/><path class="p-3tqnbzb"/><path class="o7w846b2d"/></g>`,
		"fallback": "iconmind:fertiliser-outline-thin",
	});
}

export default Component;
