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

.ns0c7bbfw {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8");
}

.qdv00pyqu {
  d: path("M13.5 6.5A3.5 3.5 0 0 1 10 10");
}

.qfokc8b1a {
  d: path("M10 6.5h7.5v7h-11v-7m3.5 0V10");
}
</style><g class="hntgybcog"><path class="ns0c7bbfw"/><path class="qfokc8b1a"/><path class="qdv00pyqu"/></g>`,
		"fallback": "uix:cad-drawing",
	});
}

export default Component;
