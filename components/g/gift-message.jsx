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
		"content": `<style>.aw-g4rp-v {
  d: path("M12 5.5H4.5A1.5 1.5 0 0 0 3 7v12.5A1.5 1.5 0 0 0 4.5 21H12Zm0 0l9-3v14L12 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o015gzyjo {
  d: path("M7.5 15.75S5 14 5 12.5c0-1 .75-1.5 1.5-1.5c.5 0 1 .5 1 1c0-.5.5-1 1-1c.75 0 1.5.5 1.5 1.5c0 1.5-2.5 3.25-2.5 3.25m7.25-7.5L18.25 7m-3.5 4.5l3.5-1.25");
}
</style><g class="hntgybcog"><path class="aw-g4rp-v"/><path class="o015gzyjo"/></g>`,
		"fallback": "uix:gift-message",
	});
}

export default Component;
