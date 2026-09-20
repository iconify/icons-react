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
		"content": `<style>.v_8x3tb1e {
  fill: var(--svg-color--78e6d0, #78e6d0);
  d: path("m19.966 9.301l-3.66 2.692a4.1 4.1 0 0 0-.867-2.52c-1.431-1.853-4.131-2.223-6.03-.827L3 13.36l1.034 1.338l3.66-2.691c0 .913.306 1.8.867 2.52c1.431 1.853 4.131 2.223 6.03.827L21 10.64zm-6.35 4.79a2.74 2.74 0 0 1-2.979.165a2.64 2.64 0 0 1-1.056-1.118a2.56 2.56 0 0 1-.24-1.502a2.6 2.6 0 0 1 .656-1.38c.356-.388.82-.663 1.33-.792a2.75 2.75 0 0 1 1.558.064c.499.168.937.48 1.26.896a2.57 2.57 0 0 1-.529 3.667");
}
</style><path class="v_8x3tb1e"/>`,
		"fallback": "token-branded:dtx",
	});
}

export default Component;
