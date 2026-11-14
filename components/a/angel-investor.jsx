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
		"content": `<style>.eyelg0hjb {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0M7 3.75a5 1.5 0 1 0 10 0a5 1.5 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mjqlf4b7i {
  d: path("M13.75 13.25C13.5 12.5 12.9 12 12 12c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M12 10.75V12m0 6v1.25");
}
</style><g class="hntgybcog"><path class="eyelg0hjb"/><path class="mjqlf4b7i"/></g>`,
		"fallback": "uix:angel-investor",
	});
}

export default Component;
