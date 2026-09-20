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
		"content": `<style>.fe0qu7bop {
  d: path("m9 15 3 -3V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.rijjfqbwb {
  d: path("m15 15 -3 -3");
}
</style><g class="hntgybcog"><path class="iaozfqbuj"/><path class="fe0qu7bop"/><path class="rijjfqbwb"/></g>`,
		"fallback": "iconmind:input-sanitize-outline-thin",
	});
}

export default Component;
