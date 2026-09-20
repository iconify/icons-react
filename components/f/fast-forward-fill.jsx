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
		"content": `<style>.vpej1ibve {
  fill: currentColor;
  d: path("M256 128a15.76 15.76 0 0 1-7.33 13.34l-88.19 56.16A15.91 15.91 0 0 1 136 184.16v-37.3L56.48 197.5A15.91 15.91 0 0 1 32 184.16V71.84A15.91 15.91 0 0 1 56.48 58.5L136 109.14v-37.3a15.91 15.91 0 0 1 24.48-13.34l88.19 56.16A15.76 15.76 0 0 1 256 128");
}
</style><path class="vpej1ibve"/>`,
		"fallback": "ph:fast-forward-fill",
	});
}

export default Component;
