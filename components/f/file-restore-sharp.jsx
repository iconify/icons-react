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
		"content": `<style>.gom4k1izz {
  d: path("M13.75 2.75v5.5h5.5m-11 4h4m2.25 5.5a3.25 3.25 0 1 0 1-2.35");
}

.q_n3fabrg {
  d: path("M14.5 13.75v1.75h1.75");
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
</style><g class="x2cwu0gfd"><path class="z_vrkxb-f"/><path class="gom4k1izz"/><path class="q_n3fabrg"/></g>`,
		"fallback": "iconoven:file-restore-sharp",
	});
}

export default Component;
