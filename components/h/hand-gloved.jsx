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
		"content": `<style>.xeyca6kjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 17.5v-1.25L4.5 13a1.5 1.5 0 0 1 2.25-2l.75.75V6.5a1.5 1.5 0 0 1 3 0V11V4.5a1.5 1.5 0 0 1 3 0V11V5.5a1.5 1.5 0 0 1 3 0V11V8a1.5 1.5 0 0 1 3 0v9.5m-12 0h12v4h-12Z");
}
</style><path class="xeyca6kjs"/>`,
		"fallback": "uix-sharp:hand-gloved",
	});
}

export default Component;
