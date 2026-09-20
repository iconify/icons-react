import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wli7-q4yg {
  fill: currentColor;
  d: path("M17 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1c.35 0 .687-.06 1-.17v5.446c0 1.418-1.164 2.566-2.6 2.566h-4.59l-4.011 2.961a1.01 1.01 0 0 1-1.4-.199a.98.98 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h9.57A3 3 0 0 0 17 7");
}
</style><path class="wli7-q4yg"/>`,
		"fallback": "fluent:comment-badge-20-filled",
	});
}

export default Component;
