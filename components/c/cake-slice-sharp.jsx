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
		"content": `<style>.k3oj3f_8y {
  d: path("M2.75 14.25c1.55 0 1.55 1.25 3.08 1.25s1.55-1.25 3.09-1.25S10.46 15.5 12 15.5s1.54-1.25 3.08-1.25s1.55 1.25 3.09 1.25s1.53-1.25 3.08-1.25m-15 4h11.5M12 10.75V7.5m0-4.75l1.5 1.579v.921a1.5 1.5 0 0 1-3 0v-.921z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdjzwzbdf {
  d: path("M2.75 10.75h18.5v10.5H2.75z");
}
</style><g class="x2cwu0gfd"><path class="xdjzwzbdf"/><path class="k3oj3f_8y"/></g>`,
		"fallback": "iconoven:cake-slice-sharp",
	});
}

export default Component;
