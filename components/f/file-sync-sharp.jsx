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
		"content": `<style>.q8avwdbpa {
  d: path("M13.75 2.75v5.5h5.5m-11 4h4m2 4.75A3.25 3.25 0 0 1 20 15.25m.25-1.75v2h-2m2.5 2A3.25 3.25 0 0 1 15 19.25M14.75 21v-2h2");
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
</style><g class="x2cwu0gfd"><path class="z_vrkxb-f"/><path class="q8avwdbpa"/></g>`,
		"fallback": "iconoven:file-sync-sharp",
	});
}

export default Component;
