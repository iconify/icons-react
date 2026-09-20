import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w_fia1b-l {
  fill: currentColor;
  d: path("M11.116 26.634a1.25 1.25 0 0 1 0-1.768L19.982 16l-8.866-8.866a1.25 1.25 0 0 1 1.768-1.768l9.75 9.75a1.25 1.25 0 0 1 0 1.768l-9.75 9.75a1.25 1.25 0 0 1-1.768 0");
}
</style><path class="w_fia1b-l"/>`,
		"fallback": "fluent:chevron-right-32-filled",
	});
}

export default Component;
