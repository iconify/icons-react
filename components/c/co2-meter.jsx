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

.jpnurebha {
  d: path("M3 12a9 9 0 0 1 18 0Zm8.045 5.416a5.5 5.5 0 0 1-3.132-1.736");
}

.ldfhly6xl {
  d: path("M6.641 13.237a5.5 5.5 0 0 1 0-2.474M7.913 8.32a5.5 5.5 0 0 1 3.132-1.736M12 12l3.5-6m.25 15.5H20a1.75 1.75 0 0 0 0-3.5a2.75 2.75 0 0 0-5 .75a1.5 1.5 0 0 0 .75 2.75");
}
</style><g class="hntgybcog"><path class="jpnurebha"/><path class="ldfhly6xl"/></g>`,
		"fallback": "uix:co2-meter",
	});
}

export default Component;
