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

.n2k9n8zij {
  d: path("M12 17q-1.25 2.25.5 4.5M9.75 13L12 6.5l2.25 6.5m-3.75-2.25h3");
}

.zkefz1nrj {
  d: path("M5 9.5a7 7.5 0 1 0 14 0a7 7.5 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="zkefz1nrj"/><path class="n2k9n8zij"/></g>`,
		"fallback": "uix:balloon-letters",
	});
}

export default Component;
