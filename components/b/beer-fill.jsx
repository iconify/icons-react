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
		"content": `<style>.jm_vp3b5p {
  fill: currentColor;
  d: path("M2.465 8a4.3 4.3 0 0 1 .005-2.128c.291-1.111 1.025-2.07 1.975-2.704C6.19 2.005 8.42 2.043 10 3.472c1.58-1.429 3.81-1.467 5.555-.304c.471.312.885.703 1.223 1.156c.349.462.604.988.752 1.548c.18.697.182 1.429.005 2.128ZM17 10v1a4 4 0 0 1 0 8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9Zm-8 3a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Zm4 0a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Zm4 0v4a2 2 0 1 0 0-4");
}
</style><path class="jm_vp3b5p"/>`,
		"fallback": "coolicons:beer-fill",
	});
}

export default Component;
