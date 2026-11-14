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
		"content": `<style>.aczkicb3p {
  d: path("M15.242 19.758L15 20H2.5V8l5-5H20v8.929");
}

.u15x8uaox {
  d: path("M2.5 8H15v12m0-12l5-5m-2 11.75v3.5M18 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aczkicb3p"/><path class="u15x8uaox"/></g>`,
		"fallback": "uix-sharp:defect-detection",
	});
}

export default Component;
