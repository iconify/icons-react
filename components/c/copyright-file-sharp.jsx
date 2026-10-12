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
		"content": `<style>.izr77kboa {
  d: path("M4.75 2.75h11.5v7.54a6.75 6.75 0 0 0-4.49 10.96H2.75V2.75zM6 7h7m-7 3.25h4.5");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zk3xpabro {
  d: path("M18.12 15.66a1.75 1.75 0 1 0 0 2.68");
}
</style><g class="x2cwu0gfd"><path class="izr77kboa"/><circle class="upu83lbfh"/><path class="zk3xpabro"/></g>`,
		"fallback": "iconoven:copyright-file-sharp",
	});
}

export default Component;
