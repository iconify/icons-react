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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uzf485bbx {
  d: path("M8 7.5L6 9.75L8 12m3-4.5l2 2.25L11 12m2.75 5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm5.75 2.5l2 2");
}

.wieawq_3c {
  d: path("M11.3 19H3V2.5h13V11");
}
</style><g class="ulnmmdpxh"><path class="wieawq_3c"/><path class="uzf485bbx"/></g>`,
		"fallback": "uix-sharp:code-lens",
	});
}

export default Component;
