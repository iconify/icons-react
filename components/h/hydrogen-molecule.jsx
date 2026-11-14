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
		"content": `<style>.dxl9y9b0l {
  d: path("M2.5 16.75a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Zm9.5-9.5a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Zm-1.25 6l2.5-2.5");
}

.tqd-eiexg {
  d: path("M4.75 16.75a2.5 2.5 0 0 1 2.5-2.5m7-7a2.5 2.5 0 0 1 2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dxl9y9b0l"/><path class="tqd-eiexg"/></g>`,
		"fallback": "uix-sharp:hydrogen-molecule",
	});
}

export default Component;
