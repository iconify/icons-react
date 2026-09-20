import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f-uxkkfru {
  fill: var(--svg-color--1eb53a, #1eb53a);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}

.k-mxk9bag {
  fill: var(--svg-color--0072c6, #0072c6);
  d: path("M4 31h28a4 4 0 0 0 4-4v-5H0v5a4 4 0 0 0 4 4");
}

.zut58gbmm {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 14h36v8H0z");
}
</style><path class="zut58gbmm"/><path class="f-uxkkfru"/><path class="k-mxk9bag"/>`,
		"fallback": "twemoji:flag-sierra-leone",
	});
}

export default Component;
