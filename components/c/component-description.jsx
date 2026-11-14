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
		"content": `<style>.pcyt748_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.856 4.606l1.788 1.788a2.625 2.625 0 0 1 0 3.712l-1.788 1.788a2.625 2.625 0 0 1-3.712 0l-1.788-1.788a2.625 2.625 0 0 1 0-3.712l1.788-1.788a2.625 2.625 0 0 1 3.712 0M4 17.25h16M4 21h10");
}
</style><path class="pcyt748_v"/>`,
		"fallback": "uix:component-description",
	});
}

export default Component;
