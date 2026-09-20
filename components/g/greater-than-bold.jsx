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
		"content": `<style>.mekzwxbnt {
  fill: currentColor;
  d: path("M228 128a12 12 0 0 1-6.86 10.84l-152 72a12 12 0 0 1-10.27-21.69L188 128L58.87 66.85a12 12 0 0 1 10.27-21.69l152 72A12 12 0 0 1 228 128");
}
</style><path class="mekzwxbnt"/>`,
		"fallback": "ph:greater-than-bold",
	});
}

export default Component;
