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
		"content": `<style>.r5yno3bwo {
  fill: var(--svg-color--50d2c1, #50d2c1);
  d: path("M21 11.937a9.4 9.4 0 0 1-.901 4.112c-.867 1.863-2.947 3.387-4.846 1.765c-1.55-1.322-1.837-4.005-4.157-4.398c-3.07-.361-3.145 3.092-5.15 3.482c-2.236.44-2.978-3.206-2.945-4.862s.487-3.984 2.43-3.984c2.236 0 2.386 3.283 5.224 3.105c2.81-.186 2.86-3.602 4.696-5.064c1.585-1.264 3.448-.337 4.381 1.184c.865 1.406 1.245 3.057 1.265 4.66z");
}
</style><path class="r5yno3bwo"/>`,
		"fallback": "token-branded:hyper-evm",
	});
}

export default Component;
