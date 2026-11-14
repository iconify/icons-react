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

.scz8qzbyp {
  d: path("M10.5 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m4.25 4.75l-5.5 5.75m-.5-5.25h.01m6.49 5h.01");
}

.ttsqbcboh {
  d: path("M12 2.5L19.5 8v11.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V8Z");
}
</style><g class="hntgybcog"><path class="ttsqbcboh"/><path class="scz8qzbyp"/></g>`,
		"fallback": "uix:carbon-tax-tag",
	});
}

export default Component;
