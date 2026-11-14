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
		"content": `<style>.aybbn9bmt {
  d: path("M8 11a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwf9jcb2y {
  d: path("M12 8.75V11l1.75 1");
}

.vljkkricq {
  d: path("M5 18v-8a7 7 0 0 1 14 0v8Zm-1.5 3h17m-13-3v3m9-3v3");
}
</style><g class="hntgybcog"><path class="vljkkricq"/><path class="aybbn9bmt"/><path class="uwf9jcb2y"/></g>`,
		"fallback": "uix:clock-mantel",
	});
}

export default Component;
