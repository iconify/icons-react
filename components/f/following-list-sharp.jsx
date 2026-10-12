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
		"content": `<style>.egv9mlbmq {
  cx: 7.5px;
  cy: 9.25px;
  r: 3px;
}

.o7k4k5bjf {
  d: path("M3.5 20.25h8.75v-.75c0-2.6-2.1-4.5-4.75-4.5s-4.75 1.9-4.75 4.5v.75zm12-10.75h5.75M15.5 14h5.75m-5.75 4.5H19");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="egv9mlbmq"/><path class="o7k4k5bjf"/></g>`,
		"fallback": "iconoven:following-list-sharp",
	});
}

export default Component;
