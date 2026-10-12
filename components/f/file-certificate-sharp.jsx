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
		"content": `<style>.qf4uhab1g {
  d: path("M13.75 2.75v5.5h5.5m-11 4h4");
}

.w4sxbibso {
  d: path("M16 18.75v2.5l1.5-.75l1.5.75v-2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_vrkxb-f {
  d: path("M11.75 21.25h-7V2.75h9l5.5 5.5v3.5");
}

.zk72-vvrv {
  cx: 17.5px;
  cy: 16.25px;
  r: 2.5px;
}
</style><g class="x2cwu0gfd"><path class="z_vrkxb-f"/><path class="qf4uhab1g"/><circle class="zk72-vvrv"/><path class="w4sxbibso"/></g>`,
		"fallback": "iconoven:file-certificate-sharp",
	});
}

export default Component;
