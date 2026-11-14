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
		"content": `<style>.f154f315p {
  d: path("M10.25 8.75L7.75 13h3l-2.5 4.25m6.5-8.75c3.25-3 6.75-1 6.25 2.75c-.5 3.25-.75 6.25.5 10.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.muqswaccq {
  d: path("M9.25 6zA6.75 6.75 0 0 1 16 12.75v.5A6.75 6.75 0 0 1 9.25 20a6.75 6.75 0 0 1-6.75-6.75v-.5A6.75 6.75 0 0 1 9.25 6");
}
</style><g class="hntgybcog"><path class="muqswaccq"/><path class="f154f315p"/></g>`,
		"fallback": "uix:implantable-defibrillator",
	});
}

export default Component;
