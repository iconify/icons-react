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

.s4-r42i2h {
  d: path("M6.125 3.5h4.788a2.63 2.63 0 0 1 1.856.769l5.875 5.875a2.625 2.625 0 0 1 0 3.712l-4.788 4.788a2.625 2.625 0 0 1-3.712 0l-5.875-5.875a2.63 2.63 0 0 1-.769-1.856V6.125A2.625 2.625 0 0 1 6.125 3.5M8 8h.01");
}

.w8j15ybzt {
  d: path("M13 10c.1 2 .9 2.9 3 3c-2.1.1-2.9 1-3 3c-.1-2-.9-2.9-3-3c2.1-.1 2.9-1 3-3");
}
</style><g class="hntgybcog"><path class="s4-r42i2h"/><path class="w8j15ybzt"/></g>`,
		"fallback": "uix:auto-tag",
	});
}

export default Component;
