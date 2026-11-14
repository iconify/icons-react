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
		"content": `<style>.e1jfpskdi {
  d: path("m12.514 7.167l.162.368a1.5 1.5 0 0 0 1.222.887l.4.041a.562.562 0 0 1 .317.978l-.299.268a1.5 1.5 0 0 0-.467 1.436l.085.392a.562.562 0 0 1-.832.605l-.347-.202a1.5 1.5 0 0 0-1.51 0l-.347.202a.562.562 0 0 1-.832-.605l.085-.392a1.5 1.5 0 0 0-.467-1.436l-.299-.268a.562.562 0 0 1 .317-.978l.4-.041a1.5 1.5 0 0 0 1.222-.887l.162-.368a.562.562 0 0 1 1.028 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s1-zhubkj {
  d: path("M8.625 3h6.75A2.625 2.625 0 0 1 18 5.625V17.25a1.875 1.875 0 0 1-3 1.5l-1.425-1.069a2.625 2.625 0 0 0-3.15 0L9 18.75a1.875 1.875 0 0 1-3-1.5V5.625A2.625 2.625 0 0 1 8.625 3");
}
</style><g class="hntgybcog"><path class="s1-zhubkj"/><path class="e1jfpskdi"/></g>`,
		"fallback": "uix:bookmark-star",
	});
}

export default Component;
