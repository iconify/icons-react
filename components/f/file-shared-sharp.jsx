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
		"content": `<style>.id0kkljei {
  cx: 19.5px;
  cy: 14.75px;
  r: 1.25px;
}

.k6xxgtdme {
  d: path("M13.75 2.75v5.5h5.5m-11 4h4m4.25 4.5l2-1.25m-2 2.75l2 1.25");
}

.p374bcbxq {
  cx: 15.25px;
  cy: 17.5px;
  r: 1.5px;
}

.u9x99hfmy {
  cx: 19.5px;
  cy: 20px;
  r: 1.25px;
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
</style><g class="x2cwu0gfd"><path class="z_vrkxb-f"/><path class="k6xxgtdme"/><circle class="p374bcbxq"/><circle class="id0kkljei"/><circle class="u9x99hfmy"/></g>`,
		"fallback": "iconoven:file-shared-sharp",
	});
}

export default Component;
