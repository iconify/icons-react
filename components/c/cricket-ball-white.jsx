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
		"content": `<style>.b0bwkxgvh {
  d: path("M21 8.75A15.5 15.5 0 0 0 8.75 21");
}

.cwuu6d1dz {
  d: path("M19.5 6.25A18.5 18.5 0 0 0 6.25 19.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="b0bwkxgvh"/><path class="cwuu6d1dz"/></g>`,
		"fallback": "uix-sharp:cricket-ball-white",
	});
}

export default Component;
