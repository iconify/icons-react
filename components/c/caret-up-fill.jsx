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
		"content": `<style>.osy3mqf7d {
  fill: currentColor;
  d: path("M11.293 9.293a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 15H8a1.002 1.002 0 0 1-.707-1.707Z");
}
</style><path class="osy3mqf7d"/>`,
		"fallback": "coolicons:caret-up-fill",
	});
}

export default Component;
