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
		"content": `<style>.dw9h40wow {
  d: path("M4 4q8-2 16 0c-2 5-2 11 0 17q-8 1.5-16 0C6 15 6 9 4 4");
}

.gjh4r7bsj {
  d: path("M9.5 3.25q1.5 8.625 0 18m5-18q-1.5 8.625 0 18");
}

.hcret-b6a {
  d: path("m10.25 6.5l3.5 3l-3.5 3l3.5 3l-3.5 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dw9h40wow"/><path class="gjh4r7bsj"/><path class="hcret-b6a"/></g>`,
		"fallback": "uix:corset-lacing",
	});
}

export default Component;
