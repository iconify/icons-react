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
		"content": `<style>.aqpx8mbxp {
  d: path("M8 10.25h8v3.5H8ZM12 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uykogrl1p {
  d: path("M2.5 7.5h19v9h-19Z");
}
</style><g class="ulnmmdpxh"><path class="uykogrl1p"/><path class="aqpx8mbxp"/></g>`,
		"fallback": "uix-sharp:horizon-level",
	});
}

export default Component;
