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

.lehbqvbjj {
  d: path("m12 19.25l-1.5 1.25l1.5 1.25");
}

.nbu98sw9a {
  d: path("M8 18s-5-3-5-6.25C3 10.25 4.25 9 5.75 9c1 0 1.75.75 2.25 1.5c.5-.75 1.5-1.5 2.25-1.5c1.5 0 2.75 1.25 2.75 2.75C13 15 8 18 8 18");
}

.y1ux6ccvy {
  d: path("M10.5 9c0-4 2-6 5-6C19 3 21 6 21 10.5c0 5.5-4 10-10.5 10");
}
</style><g class="hntgybcog"><path class="nbu98sw9a"/><path class="y1ux6ccvy"/><path class="lehbqvbjj"/></g>`,
		"fallback": "uix:circulatory-system",
	});
}

export default Component;
