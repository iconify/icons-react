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
		"content": `<style>.i0txikb2s {
  fill: var(--svg-color--1b75bc, #1B75BC);
  d: path("M8.22 5.834L12 9.667l3.685-3.833L18 8.134L14.229 12L18 15.834l-2.315 2.333L12 14.333l-3.78 3.834L6 15.9l3.737-3.916L6 8.125l2.22-2.3zm.3-.309L11.983 2l3.463 3.525l-1.817 1.883l-1.646-1.758l-1.638 1.758zm0 12.95l1.826-1.883l1.637 1.758l1.646-1.758l1.817 1.883L11.983 22z");
}
</style><path class="i0txikb2s"/>`,
		"fallback": "token-branded:adx",
	});
}

export default Component;
