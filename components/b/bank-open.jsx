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
		"content": `<style>.p4rtytbow {
  d: path("M3.25 4.75a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xbic4eb6v {
  d: path("M4.75 2.5h14.5a1.5 2.25 0 0 1 0 4.5H4.75M4.5 9.75V21.5m15-11.75V21.5M2 21.5h20m-14-6h7M12.5 13l2.5 2.5l-2.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="p4rtytbow"/><path class="xbic4eb6v"/></g>`,
		"fallback": "uix-sharp:bank-open",
	});
}

export default Component;
