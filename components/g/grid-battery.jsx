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
		"content": `<style>.mobnzkbbn {
  d: path("m16.25 8l-2 4h3l-2 4");
}

.u79uzdb3f {
  d: path("M2.5 6h19v12h-19Zm4 3v6M10 9v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u79uzdb3f"/><path class="mobnzkbbn"/></g>`,
		"fallback": "uix-sharp:grid-battery",
	});
}

export default Component;
