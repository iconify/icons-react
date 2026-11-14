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
		"content": `<style>.bb5q6cbmd {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Zm0 0h17M12 3.25v7.25m0 10V16");
}

.seaee5bbo {
  d: path("M12 17.5c0-2.25-1.75-3.5-3.5-3.5c0 2 1.5 3.5 3.5 3.5Zm0-1c0-2.25 1.75-3.25 3.5-3.25c0 2-1.5 3.25-3.5 3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bb5q6cbmd"/><path class="seaee5bbo"/></g>`,
		"fallback": "uix-sharp:greenhouse",
	});
}

export default Component;
