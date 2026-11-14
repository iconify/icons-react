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
		"content": `<style>.ed2jddb4m {
  d: path("M21.5 10.757V18.5c-3-1-6.5-.5-9.5 1.5c-3-2-6.5-2.5-9.5-1.5v-11C5.5 6.5 9 7 12 9a12.4 12.4 0 0 1 1.932-1.055M12 9v7.6m0 2.8v.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7t6frble {
  d: path("m15 14l.25-2.75l4.5-7.75l2 1.25l-4.5 7.75Z");
}
</style><g class="ulnmmdpxh"><path class="ed2jddb4m"/><path class="w7t6frble"/></g>`,
		"fallback": "uix-sharp:condolence-guestbook",
	});
}

export default Component;
