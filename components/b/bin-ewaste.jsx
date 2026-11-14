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
		"content": `<style>.apsyvcbei {
  d: path("M9 9.5h6v2a3 3 0 0 1-6 0Zm3 5V17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ylqf8in1w {
  d: path("M3.5 4h17m-15 0L7 18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1.5-14m-8 3.5v2m3-2v2");
}
</style><g class="hntgybcog"><path class="ylqf8in1w"/><path class="apsyvcbei"/></g>`,
		"fallback": "uix:bin-ewaste",
	});
}

export default Component;
