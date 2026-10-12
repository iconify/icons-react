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
		"content": `<style>.nv_f5nmbe {
  d: path("M8 12V2.75h5.5V7H20v5h-1Zm2.25-7h1m-8.5 4H5.5v6H2.75zm2.75 2H8m10-4l3.25-3.25");
}

.phxq_-r2r {
  cx: 11px;
  cy: 18.25px;
  r: 3px;
}

.qp-tl-83e {
  cx: 19px;
  cy: 19.25px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nv_f5nmbe"/><circle class="phxq_-r2r"/><circle class="qp-tl-83e"/></g>`,
		"fallback": "iconoven:combine-harvester-sharp",
	});
}

export default Component;
