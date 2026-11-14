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

.jsatwlp0c {
  d: path("M3 21.5V12h18v9.5");
}

.rbv9ltwdm {
  d: path("m3 16.5l9 2.5l9-2.5m-9.5-11h1A1.5 1.5 0 0 1 14 7v3.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V7a1.5 1.5 0 0 1 1.5-1.5M12 3h.01");
}
</style><g class="hntgybcog"><path class="jsatwlp0c"/><path class="rbv9ltwdm"/></g>`,
		"fallback": "uix:altar-table",
	});
}

export default Component;
