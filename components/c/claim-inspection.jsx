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
		"content": `<style>.a_9mrccvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 10.5l5-5l5 5V18h-10Zm10.5 4a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm6 2.5l2 2");
}
</style><path class="a_9mrccvk"/>`,
		"fallback": "uix-sharp:claim-inspection",
	});
}

export default Component;
