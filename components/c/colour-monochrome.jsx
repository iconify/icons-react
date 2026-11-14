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
		"content": `<style>.na22_2g1n {
  fill: currentColor;
  d: path("M7.5 3.75a9.5 9.5 0 0 0 0 16.5Z");
}

.ovqc6bbvy {
  d: path("M13 2.75v18.5");
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
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="na22_2g1n"/><path class="ovqc6bbvy"/></g>`,
		"fallback": "uix-sharp:colour-monochrome",
	});
}

export default Component;
