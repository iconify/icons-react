import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":285};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d1v150qky {
  d: path("M220.412 0h-92.415l28.562 89.006h92.416l-74.77 53.077l28.57 89.511c48.128-35.06 63.854-88.12 46.208-142.588zM7.018 89.006h92.416L127.997 0H35.589zc-17.655 54.468-1.92 107.529 46.207 142.588l28.563-89.51zm46.208 142.588l74.77 52.97l74.77-52.97l-74.77-53.847z");
}
</style><path class="d1v150qky"/>`,
		"fallback": "logos:auth0-icon",
	});
}

export default Component;
