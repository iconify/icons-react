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
		"content": `<style>.p1u9vubjo {
  d: path("M12.5 6h9v15.5h-9Zm-9 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm.5-12l2.5 9");
}

.qojv_-bmk {
  d: path("m17 6l-1.25 4L18 13l-1.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p1u9vubjo"/><path class="qojv_-bmk"/></g>`,
		"fallback": "uix-sharp:demolition",
	});
}

export default Component;
