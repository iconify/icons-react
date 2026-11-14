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
		"content": `<style>.ounu1bbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0V13m3 2.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0V9m3 2.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0V3");
}
</style><path class="ounu1bbaw"/>`,
		"fallback": "uix:chorus-effect",
	});
}

export default Component;
