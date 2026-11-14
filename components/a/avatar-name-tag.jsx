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
		"content": `<style>.f6fng1zml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M6.5 14c0-2.25 2.5-3.5 5.5-3.5s5.5 1.25 5.5 3.5m-13 2.75h14.899A.769.769 0 0 1 20 18l-.25.313a1.5 1.5 0 0 0 0 1.874l.25.313a.769.769 0 0 1-.601 1.25H4.5a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="f6fng1zml"/>`,
		"fallback": "uix:avatar-name-tag",
	});
}

export default Component;
