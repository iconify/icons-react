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
		"content": `<style>.jjqp1tbzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h15v18h-15Zm3.25 5v8m2.75-8v8m2.75-8v8M16 8v8m-9.5-1l10.75-6");
}
</style><path class="jjqp1tbzx"/>`,
		"fallback": "uix-sharp:ballot-counting",
	});
}

export default Component;
