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
		"content": `<style>.ed_l79blo {
  d: path("M9.5 2.75h5v2.5h-5zm2.5 2.5v2.5m-9.25 0h18.5v11H2.75z");
}

.ttidu-b1p {
  d: path("M6 11h1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0np8cblh {
  cx: 14.5px;
  cy: 13.25px;
  r: 3px;
}
</style><g class="x2cwu0gfd"><path class="ed_l79blo"/><circle class="z0np8cblh"/><path class="ttidu-b1p"/></g>`,
		"fallback": "iconoven:dashcam-sharp",
	});
}

export default Component;
