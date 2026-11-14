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
		"content": `<style>.p8s9agp4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 11.5L4 6a2.25 2.25 0 0 1 2.5-3.25l7.25 5.5m-.25 6l1.5 2.5a1.5 1.5 0 0 1-3 0Zm5-2.25l1.5 2.5a1.5 1.5 0 0 1-3 0ZM3 21h18");
}
</style><path class="p8s9agp4o"/>`,
		"fallback": "uix-sharp:hazard-corrosive",
	});
}

export default Component;
