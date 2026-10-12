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
		"content": `<style>.b544atblo {
  d: path("M12 12.5q.39 2.86 3.25 3.25q-2.86.39-3.25 3.25q-.39-2.86-3.25-3.25q2.86-.39 3.25-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kj-y71p1t {
  d: path("M10 3.75h4v4.5l5.75 10.25a1.9 1.9 0 0 1-1.65 2.75H5.9a1.9 1.9 0 0 1-1.65-2.75L10 8.25Zm-1.75 0h7.5");
}
</style><g class="hntgybcog"><path class="kj-y71p1t"/><path class="b544atblo"/></g>`,
		"fallback": "iconoven:ai-researcher",
	});
}

export default Component;
