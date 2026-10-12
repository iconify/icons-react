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
		"content": `<style>.m46gtf06q {
  d: path("M3.5 20.25h11.75v-.75c0-3-2.8-5.25-6.25-5.25S2.75 16.5 2.75 19.5v.75zm12-13h5.75V12H15.5zm1.5 0v-2.5h2.75v2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yredinz1h {
  cx: 9px;
  cy: 7.75px;
  r: 3.75px;
}
</style><g class="x2cwu0gfd"><circle class="yredinz1h"/><path class="m46gtf06q"/></g>`,
		"fallback": "iconoven:hiring-sharp",
	});
}

export default Component;
