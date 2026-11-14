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
		"content": `<style>.jsatwlp0c {
  d: path("M3 21.5V12h18v9.5");
}

.r0u_sr26s {
  d: path("m3 16.5l9 2.5l9-2.5m-11-11h4V12h-4ZM12 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jsatwlp0c"/><path class="r0u_sr26s"/></g>`,
		"fallback": "uix-sharp:altar-table",
	});
}

export default Component;
