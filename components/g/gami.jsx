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
		"content": `<style>.akll96jam {
  fill: var(--svg-color--fa096f, #fa096f);
  d: path("M16.5 16.044a5.32 5.32 0 0 1-3.656 1.58C10.25 17.625 7.5 15.32 7.5 12s2.75-5.625 5.344-5.625a5.43 5.43 0 0 1 4.207 2.21l2.824-1.844A8.72 8.72 0 0 0 12.844 3c-4.658 0-8.719 4.027-8.719 9s4.061 9 8.719 9a8.72 8.72 0 0 0 7.031-3.74v-6.385h-6.187v2.812H16.5z");
}
</style><path class="akll96jam"/>`,
		"fallback": "token-branded:gami",
	});
}

export default Component;
