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
		"content": `<style>.c85j5tb5h {
  d: path("M9.375 2.5h5.25A4.375 4.375 0 0 1 19 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125V6.875A4.375 4.375 0 0 1 9.375 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zw5tym9hl {
  d: path("m13.296 7.721l.888 1.523a1.5 1.5 0 0 1-1.296 2.256h-1.776a1.5 1.5 0 0 1-1.296-2.256l.888-1.523a1.5 1.5 0 0 1 2.592 0M12 11.5v3m-3 3.25h6");
}
</style><g class="hntgybcog"><path class="c85j5tb5h"/><path class="zw5tym9hl"/></g>`,
		"fallback": "uix:flash-card-kids",
	});
}

export default Component;
