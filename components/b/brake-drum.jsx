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
		"content": `<style>.lujjg8ezb {
  d: path("M7.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-5.5h.01m4.74 8.25h.01m-9.51 0h.01");
}

.mi9qgdbbz {
  d: path("M10.5 4h3a8 8 0 0 1 0 16h-3");
}

.nusna_vpp {
  d: path("M2.5 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nusna_vpp"/><path class="mi9qgdbbz"/><path class="lujjg8ezb"/></g>`,
		"fallback": "uix-sharp:brake-drum",
	});
}

export default Component;
