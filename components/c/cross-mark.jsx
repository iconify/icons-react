import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r9vk_5gyf {
  fill: var(--svg-color--ed6c30, #ed6c30);
  d: path("m79.64 64l29.9-29.9c1.38-1.38 1.38-3.64 0-5.03L98.93 18.46a3.573 3.573 0 0 0-5.03 0L64 48.36l-29.9-29.9a3.573 3.573 0 0 0-5.03 0l-10.6 10.61a3.555 3.555 0 0 0 0 5.03L48.36 64l-29.9 29.9c-1.38 1.38-1.38 3.64 0 5.03l10.61 10.61a3.573 3.573 0 0 0 5.03 0L64 79.63l29.9 29.91a3.573 3.573 0 0 0 5.03 0l10.61-10.61c1.38-1.39 1.38-3.65 0-5.03z");
}
</style><path class="r9vk_5gyf"/>`,
		"fallback": "noto-v1:cross-mark",
	});
}

export default Component;
