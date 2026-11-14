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
		"content": `<style>.gi3uidvkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H11v4.5H2.5ZM7 15h14.5v4.5H7ZM17.5 3.75l3.5 3.5l-3.5 3.5l-3.5-3.5Z");
}
</style><path class="gi3uidvkh"/>`,
		"fallback": "uix-sharp:gantt-milestone",
	});
}

export default Component;
