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
		"content": `<style>.gre77jqcr {
  d: path("M8.5 9.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.miq4amblq {
  d: path("m8.738 3.632l5.38-1.144l.572 2.69l-5.38 1.144ZM4 21.5c0-3.75 3.5-5.75 8-5.75q.286 0 .565.011m7.556.118l-4.596 4.596m-.177-4.066l3.359.884l.884 3.359m-4.773-1.238l1.768 1.768");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gre77jqcr"/><path class="miq4amblq"/></g>`,
		"fallback": "uix-sharp:flight-attendant",
	});
}

export default Component;
