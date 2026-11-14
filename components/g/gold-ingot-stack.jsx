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
		"content": `<style>.ufos4vnbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.421 17h4.158a1.5 1.5 0 0 0 1.455-1.864l-.5-2A1.5 1.5 0 0 0 8.079 12H4.921a1.5 1.5 0 0 0-1.455 1.136l-.5 2A1.5 1.5 0 0 0 4.421 17m11 0h4.158a1.5 1.5 0 0 0 1.455-1.864l-.5-2A1.5 1.5 0 0 0 19.079 12h-3.158a1.5 1.5 0 0 0-1.455 1.136l-.5 2A1.5 1.5 0 0 0 15.421 17m-6-5h5.158a1.5 1.5 0 0 0 1.455-1.864l-.5-2A1.5 1.5 0 0 0 14.079 7H9.921a1.5 1.5 0 0 0-1.455 1.136l-.5 2A1.5 1.5 0 0 0 9.421 12");
}
</style><path class="ufos4vnbe"/>`,
		"fallback": "uix:gold-ingot-stack",
	});
}

export default Component;
