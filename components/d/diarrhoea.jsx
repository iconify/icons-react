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

.j__ze2qgz {
  d: path("M4.75 2.5h1.5A1.75 1.75 0 0 1 8 4.25v4.5a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 3 8.75v-4.5A1.75 1.75 0 0 1 4.75 2.5M3 11h13.5c0 3.75-2.25 6.25-5.5 6.25H9.25L10 21.5H4.75L5 16.75C3.75 15.5 3 13.5 3 11");
}

.o7f9npbyw {
  d: path("M19 9.5L20.5 8");
}

.yzfmeabrs {
  fill: currentColor;
  d: path("M13 3c1 1.25 1.5 2 1.5 2.75s-.65 1.5-1.5 1.5s-1.5-.75-1.5-1.5S12 4.25 13 3m5-.5c1 1.25 1.5 2 1.5 2.75s-.65 1.5-1.5 1.5s-1.5-.75-1.5-1.5s.5-1.5 1.5-2.75");
}
</style><g class="hntgybcog"><path class="j__ze2qgz"/><path class="yzfmeabrs"/><path class="o7f9npbyw"/></g>`,
		"fallback": "uix:diarrhoea",
	});
}

export default Component;
