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
		"content": `<style>.d_yxl29go {
  d: path("M13.5 9.5 16 12l-2.5 2.5");
}

.eh65335vs {
  d: path("M7 12h9");
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
</style><g class="hntgybcog"><path class="iaozfqbuj"/><path class="eh65335vs"/><path class="d_yxl29go"/></g>`,
		"fallback": "iconmind:data-processor-outline-thin",
	});
}

export default Component;
