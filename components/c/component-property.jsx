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
		"content": `<style>.u1qoigwbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.856 4.356l3.788 3.788a2.625 2.625 0 0 1 0 3.712l-3.788 3.788a2.625 2.625 0 0 1-3.712 0l-3.788-3.788a2.625 2.625 0 0 1 0-3.712l3.788-3.788a2.625 2.625 0 0 1 3.712 0M12.5 19h9M17 16za1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 17 22a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 17 16");
}
</style><path class="u1qoigwbx"/>`,
		"fallback": "uix:component-property",
	});
}

export default Component;
