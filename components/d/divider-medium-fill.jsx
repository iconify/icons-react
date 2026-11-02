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
		"content": `<style>.y9qwkaj6s {
  fill: currentColor;
  d: path("M13 7v10a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0");
}
</style><path class="y9qwkaj6s"/>`,
		"fallback": "coolicons:divider-medium-fill",
	});
}

export default Component;
