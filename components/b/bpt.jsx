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
		"content": `<style>.b1ux7tpty {
  fill: var(--svg-color--05bf68, #05BF68);
  d: path("M8.667 2h2.666v4.667h-2a.667.667 0 0 0-.666.666v9.334a.667.667 0 0 0 .666.666h2V22H8.667A4.667 4.667 0 0 1 4 17.333V6.667A4.667 4.667 0 0 1 8.667 2m4 20h2.666A4.667 4.667 0 0 0 20 17.333v-2.666h-4.667v2a.666.666 0 0 1-.666.666h-2zm2.666-14.667a.666.666 0 0 0-.666-.666h-2V2h2.666A4.667 4.667 0 0 1 20 6.667V8h-4.667z");
}
</style><path class="b1ux7tpty"/>`,
		"fallback": "token-branded:bpt",
	});
}

export default Component;
