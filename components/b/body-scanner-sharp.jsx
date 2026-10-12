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
		"content": `<style>.i78-z3b7z {
  d: path("M2.75 2.75h3v18.5h-3zm15.5 0h3v18.5h-3zm-12.5.75h12.5");
}

.kq_3o2btk {
  d: path("M8.75 21.25V17a3.25 3.25 0 0 1 6.5 0v4.25ZM11 18h2");
}

.uk55qvbnt {
  cx: 12px;
  cy: 8.75px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="i78-z3b7z"/><circle class="uk55qvbnt"/><path class="kq_3o2btk"/></g>`,
		"fallback": "iconoven:body-scanner-sharp",
	});
}

export default Component;
