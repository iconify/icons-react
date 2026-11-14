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
		"content": `<style>.ls7xnxbob {
  d: path("M12.677 17.473A6.9 6.9 0 0 1 10 18c-3.75 0-6.5-2.25-6.5-5.5c0-3.5 3-5.75 7-5.5c.5-2.25 2.25-3.5 4.5-3.5s3.75 1.75 3.5 4c-.25 2-1.25 3.25-2 4q0 .647-.102 1.241");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xn02azbbb {
  d: path("M18.25 6L21 7l-2.5 1.5Zm-3 .25h.01M7.5 12c1.31 1.746 3.381 2.349 5.217 1.476M9 18v2.5m-5.5-8l-1-3m12.25 11.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><g class="ulnmmdpxh"><path class="ls7xnxbob"/><path class="xn02azbbb"/></g>`,
		"fallback": "uix-sharp:early-bird-offer",
	});
}

export default Component;
