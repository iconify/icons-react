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
		"content": `<style>.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.h3fzu7oso {
  d: path("M6.375 2h11.25A4.375 4.375 0 0 1 22 6.375v11.25A4.375 4.375 0 0 1 17.625 22H6.375A4.375 4.375 0 0 1 2 17.625V6.375A4.375 4.375 0 0 1 6.375 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wibli6lzz {
  d: path("M12 10c-1.5-2.5-1-5 1.5-5c1.5 1.5 1 3.5-1.5 5m2 2c2.5-1.5 5-1 5 1.5c-1.5 1.5-3.5 1-5-1.5m-2 2c1.5 2.5 1 5-1.5 5c-1.5-1.5-1-3.5 1.5-5m-2-2c-2.5 1.5-5 1-5-1.5c1.5-1.5 3.5-1 5 1.5");
}
</style><g class="hntgybcog"><path class="h3fzu7oso"/><path class="wibli6lzz"/><path class="fv5pcnpmp"/></g>`,
		"fallback": "uix:greenhouse-fan",
	});
}

export default Component;
