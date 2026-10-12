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
		"content": `<style>.j9fpar72v {
  d: path("M3.75 5.25h16.5v15H3.75zm0 4.75h16.5M8 2.75v4.5m8-4.5v4.5");
}

.p-ysxrh5t {
  d: path("M11 12.5h2.5v5.25l-.38-.32l-.74-.61l-.38-.32l-.38.32l-.74.61l-.38.32V12.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="j9fpar72v"/><path class="p-ysxrh5t"/></g>`,
		"fallback": "iconoven:calendar-event-sharp",
	});
}

export default Component;
