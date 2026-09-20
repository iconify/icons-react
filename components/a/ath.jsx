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
		"content": `<style>.rta4fyaty {
  fill: var(--svg-color--ea6e25, #ea6e25);
  d: path("M15.706 21h-2.393L12 5.758L10.687 21H8.294l2.17-18h3.077z");
}
</style><path class="rta4fyaty"/>`,
		"fallback": "token-branded:ath",
	});
}

export default Component;
