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
		"content": `<style>.ae9wrmy0p {
  fill: currentColor;
  d: path("M19.707 8.293A1 1 0 0 1 20 9v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6c.265 0 .52.105.707.293ZM13 7a2 2 0 0 0 2 2h3l-5-5Zm0 5a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm-.99 5H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="ae9wrmy0p"/>`,
		"fallback": "coolicons:file-warning-fill",
	});
}

export default Component;
