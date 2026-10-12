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
		"content": `<style>.nrk64bchc {
  d: path("M3.25 11.25a8.75 7.5 0 0 1 17.5 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zc4o49b-c {
  d: path("M12 3.75c-1.75 2-2.5 4.75-2.5 7.5m2.5-7.5c1.75 2 2.5 4.75 2.5 7.5m-2.5 0v7.5m-9.25 2.5c3-1.75 6-2.5 9.25-2.5s6.25.75 9.25 2.5");
}
</style><g class="x2cwu0gfd"><path class="nrk64bchc"/><path class="zc4o49b-c"/></g>`,
		"fallback": "iconoven:beach-sharp",
	});
}

export default Component;
