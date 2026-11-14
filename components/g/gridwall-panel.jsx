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
		"content": `<style>.dv0jqtbfr {
  d: path("M16 11h4.5v6.5H16Zm2.25 2h.01");
}

.fhgrg6wuh {
  d: path("M21.5 20.3v1.2h-19v-19h19v5.7M8.75 2.5v19m6.5-19v5.7m0 12.1v1.2M2.5 8.75h10.7m-10.7 6.5h10.7m5.05-6.5V11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fhgrg6wuh"/><path class="dv0jqtbfr"/></g>`,
		"fallback": "uix-sharp:gridwall-panel",
	});
}

export default Component;
