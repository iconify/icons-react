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
		"content": `<style>.c-mkuab9l {
  d: path("M9.5 10.5v2.25m2.75-2.25v2.25M15 10.5v2.25M7 14q2.625 0 4.5-1.5M9 21h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kqnzw080q {
  d: path("M7 4.25a1.25 1.25 0 0 1 2.5 0v6.25H15V5.75a1.25 1.25 0 0 1 2.5 0v8a4.5 4.5 0 0 1-4.5 4.5h-1.5a4.5 4.5 0 0 1-4.5-4.5Z");
}
</style><g class="hntgybcog"><path class="kqnzw080q"/><path class="c-mkuab9l"/></g>`,
		"fallback": "iconoven:concert-hand",
	});
}

export default Component;
