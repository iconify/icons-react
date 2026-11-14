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
		"content": `<style>.sagcsgbux {
  d: path("M3.5 2.5h11v6h-11ZM3 11.25h11.5m-9 0L13 16.5m0-5.25L5.5 16.5m-3 0h19V13l-2-2.5h-2v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3gwgj-kc {
  d: path("M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="sagcsgbux"/><path class="v3gwgj-kc"/></g>`,
		"fallback": "uix-sharp:container-loader",
	});
}

export default Component;
