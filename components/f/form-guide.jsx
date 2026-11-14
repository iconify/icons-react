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

.pz3s46b5u {
  d: path("M2.5 6a2 2 0 0 1 2-2h14l3 3v11a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}

.tbvu42bzd {
  d: path("M18.5 4v3h3M4.75 10L6 15l1.25-3.5L8.5 15l1.25-5m2 0v5h2.5m2-5v5h.5a2.5 2.5 0 0 0 0-5Z");
}
</style><g class="hntgybcog"><path class="pz3s46b5u"/><path class="tbvu42bzd"/></g>`,
		"fallback": "uix:form-guide",
	});
}

export default Component;
