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

.rap0-kqcs {
  d: path("M10.125 12.75h3.75a2.625 2.625 0 0 1 2.625 2.625v.25a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 7.5 15.625v-.25a2.625 2.625 0 0 1 2.625-2.625m.125 2.75h.01m3.49 0h.01");
}

.uhp8zi62t {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v9.25A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-9.25A4.375 4.375 0 0 1 6.875 3M2.5 8h19m-16-2.5h.01M8 5.5h.01M12 10.75v2");
}
</style><g class="hntgybcog"><path class="uhp8zi62t"/><path class="rap0-kqcs"/></g>`,
		"fallback": "uix:browser-test",
	});
}

export default Component;
