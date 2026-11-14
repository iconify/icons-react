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
		"content": `<style>.aizxfybor {
  d: path("M4 3.5h16V18c-2.5-2-5.5-2-8 0s-5.5 2-8 0Z");
}

.esk2i4b8a {
  d: path("m9.5 3.5l2.5 10l2.5-10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="aizxfybor"/><path class="esk2i4b8a"/></g>`,
		"fallback": "uix:dart-sewing",
	});
}

export default Component;
