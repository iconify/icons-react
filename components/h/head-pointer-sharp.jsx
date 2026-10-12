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
		"content": `<style>.hn97-qi5q {
  d: path("M2.75 21.25C2.75 18.5 5.25 17 8.5 17s5.75 1.5 5.75 4.25M12.75 6.5L20.5 3M3.25 8.25h10.5");
}

.oyoycy5kq {
  cx: 8.5px;
  cy: 9.25px;
  r: 5.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="oyoycy5kq"/><path class="hn97-qi5q"/></g>`,
		"fallback": "iconoven:head-pointer-sharp",
	});
}

export default Component;
