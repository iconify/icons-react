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
		"content": `<style>.lf3e803ce {
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-6 13.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm12 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM12 7.5v4");
}

.mwnn_nzir {
  d: path("M6 16v-2.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2V16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lf3e803ce"/><path class="mwnn_nzir"/></g>`,
		"fallback": "uix-sharp:ancestry-map",
	});
}

export default Component;
