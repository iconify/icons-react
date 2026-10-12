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
		"content": `<style>.m6tf8tb7x {
  cx: 15.75px;
  cy: 18.5px;
  r: 2.25px;
}

.nww_hh-_u {
  d: path("m17.5 16.75l3-3M19.25 15l1.25 1.25");
}

.qf4uhab1g {
  d: path("M13.75 2.75v5.5h5.5m-11 4h4");
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
</style><g class="x2cwu0gfd"><path class="z_vrkxb-f"/><path class="qf4uhab1g"/><circle class="m6tf8tb7x"/><path class="nww_hh-_u"/></g>`,
		"fallback": "iconoven:file-encrypted-sharp",
	});
}

export default Component;
