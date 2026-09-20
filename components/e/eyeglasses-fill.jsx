import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mwn88lbmx {
  fill: currentColor;
  d: path("M232 72v92a44 44 0 0 1-87.81 4h-32.38A44 44 0 0 1 24 164V72a32 32 0 0 1 32-32a8 8 0 0 1 0 16a16 16 0 0 0-16 16v58.08A44 44 0 0 1 110.32 152h35.36A44 44 0 0 1 216 130.08V72a16 16 0 0 0-16-16a8 8 0 0 1 0-16a32 32 0 0 1 32 32");
}
</style><path class="mwn88lbmx"/>`,
		"fallback": "ph:eyeglasses-fill",
	});
}

export default Component;
