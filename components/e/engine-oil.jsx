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
		"content": `<style>.n4fwfib6c {
  d: path("M12 11s2.5 2.5 2.5 4.25a2.5 2.5 0 0 1-5 0C9.5 13.5 12 11 12 11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vj8xqhbbu {
  d: path("m5 10l3.5-3.5H17a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm5-7.5h4v4h-4Z");
}
</style><g class="ulnmmdpxh"><path class="vj8xqhbbu"/><path class="n4fwfib6c"/></g>`,
		"fallback": "uix-sharp:engine-oil",
	});
}

export default Component;
