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
		"content": `<style>.p1kgz11dz {
  d: path("M6.5 17.5v-9a2 2 0 0 1 2-2h9");
}

.rnzdl6bdu {
  d: path("M10.5 10.5h11v11h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgir-2b-o {
  d: path("M2.5 13.5v-9a2 2 0 0 1 2-2h9");
}
</style><g class="ulnmmdpxh"><path class="wgir-2b-o"/><path class="p1kgz11dz"/><path class="rnzdl6bdu"/></g>`,
		"fallback": "uix-sharp:animation-frames",
	});
}

export default Component;
