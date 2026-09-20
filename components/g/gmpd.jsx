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
		"content": `<style>.r8s5js61e {
  fill: var(--svg-color--ffb800, #ffb800);
  d: path("M21 7.615H7.343L3 9h6.655l-3.092 7.384H17.64l2.123-5.077h-6.406l-.582 1.385h4.833L16.638 15H8.724l2.51-6h9.185z");
}
</style><path class="r8s5js61e"/>`,
		"fallback": "token-branded:gmpd",
	});
}

export default Component;
