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
		"content": `<style>.e602oeblg {
  d: path("M5 6h8.5A2.5 2.5 0 0 1 16 8.5v12l-2.75-2H5A2.5 2.5 0 0 1 2.5 16V8.5A2.5 2.5 0 0 1 5 6Z");
}

.fxnk-y7ax {
  d: path("M8.5 6V4.5a2 2 0 0 1 2-2h8A2.5 2.5 0 0 1 21 5v10.5l-2.5-2H16");
}

.kik75i02f {
  d: path("M7.5 10.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-1.75 8a3.5 3.5 0 0 1 7 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fxnk-y7ax"/><path class="e602oeblg"/><path class="kik75i02f"/></g>`,
		"fallback": "uix-sharp:consulting-chat",
	});
}

export default Component;
