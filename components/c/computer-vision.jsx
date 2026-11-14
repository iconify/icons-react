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
		"content": `<style>.cfidqgxrx {
  d: path("M8.25 8.25h7.5v7.5h-7.5ZM12 12h.01");
}

.csmgcpbao {
  d: path("M2.5 12C4.5 7 8 4.5 12 4.5S19.5 7 21.5 12c-2 5-5.5 7.5-9.5 7.5S4.5 17 2.5 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="csmgcpbao"/><path class="cfidqgxrx"/></g>`,
		"fallback": "uix-sharp:computer-vision",
	});
}

export default Component;
