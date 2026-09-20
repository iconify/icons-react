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
		"content": `<style>.fqjewfbna {
  d: path("M2 16a4 4 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k74vnib1e {
  d: path("M3 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.wqwbizu_u {
  d: path("m20 7 -5 5h3l-5 5");
}
</style><g class="hntgybcog"><path class="k74vnib1e"/><path class="fqjewfbna"/><path class="wqwbizu_u"/></g>`,
		"fallback": "iconmind:electrician-outline-thin",
	});
}

export default Component;
