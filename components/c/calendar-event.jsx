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
		"content": `<style>.gkcrv-ahb {
  d: path("M3 3.5h18v18H3ZM8 2v2.75M16 2v2.75M3 7.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zd4fkgk7p {
  fill: currentColor;
  d: path("M12 10.25L13 13l3 .25L13.75 15l.75 3l-2.5-1.75L9.5 18l.75-3L8 13.25l3-.25Z");
}
</style><g class="ulnmmdpxh"><path class="gkcrv-ahb"/><path class="zd4fkgk7p"/></g>`,
		"fallback": "uix-sharp:calendar-event",
	});
}

export default Component;
