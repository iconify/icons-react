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
		"content": `<style>.ldr-ywnsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.94 11.39l1.62-2.28L8 8.5h8l.44.61l1.62 2.28l.44.61h-13zM3.75 12h17.5l-.32.95l-.36 1.1l-.32.95H3.75l-.32-.95l-.36-1.1l-.32-.95zm-.5 7c1.5 0 1.5-1 3-1s1.5 1 3 1s1.5-1 3-1s1.5 1 3 1s1.5-1 3-1s1.5 1 3 1");
}
</style><path class="ldr-ywnsb"/>`,
		"fallback": "iconoven:barge-sharp",
	});
}

export default Component;
