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
		"content": `<style>.dq9cwl5wn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 16.75l10-10L20.5 3.5l-3.25 7.75l-10 10Zm10-10l4.5 4.5m.5-6.5l1.5 1.5");
}
</style><path class="dq9cwl5wn"/>`,
		"fallback": "uix-sharp:charcoal-pencil",
	});
}

export default Component;
