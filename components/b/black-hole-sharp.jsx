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
		"content": `<style>.ie50qbcyb {
  cx: 12px;
  cy: 12px;
  r: 3.25px;
}

.lw81labzt {
  d: path("M15 6.8A6 6 0 1 1 6.8 15M9 17.2A6 6 0 1 1 17.2 9");
}

.pb72_kbtk {
  d: path("M20.69 15.16a9.25 9.25 0 0 1-17.38 0m0-6.32a9.25 9.25 0 0 1 17.38 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ie50qbcyb"/><path class="lw81labzt"/><path class="pb72_kbtk"/></g>`,
		"fallback": "iconoven:black-hole-sharp",
	});
}

export default Component;
