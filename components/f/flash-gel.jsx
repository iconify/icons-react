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
		"content": `<style>.lg6nnacti {
  d: path("M6.5 6h11v5h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uv48r9kri {
  d: path("M3 3h18v11H3Zm5.5 11h7v7.5h-7Z");
}
</style><g class="ulnmmdpxh"><path class="uv48r9kri"/><path class="lg6nnacti"/></g>`,
		"fallback": "uix-sharp:flash-gel",
	});
}

export default Component;
