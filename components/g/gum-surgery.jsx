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
		"content": `<style>.h6hivbb4v {
  d: path("m4 18l5-5a1.414 1.414 0 0 1 2 0a1.414 1.414 0 0 1 0 2l-5 5a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 1 0-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r3a_1rf5b {
  d: path("M13.107 13.491q-.538.272-1.107.509l-2-2l9-9c2.058 2.469.05 6.633-4.071 9.423M16.5 15c-1.25 0-1.75 1-1.75 2.25s.75 1.75 1 2.75l.5 1.5l1.5-2l1.5 2l.5-1.5c.25-1 1-1.5 1-2.75S20.25 15 19 15c-.75 0-.75.5-1.25.5s-.5-.5-1.25-.5");
}
</style><g class="hntgybcog"><path class="h6hivbb4v"/><path class="r3a_1rf5b"/></g>`,
		"fallback": "uix:gum-surgery",
	});
}

export default Component;
