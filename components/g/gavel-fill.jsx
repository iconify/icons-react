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
		"content": `<style>.nt0k6kbww {
  fill: currentColor;
  d: path("M3.293 16.293L10.586 9l-.293-.293a2.414 2.414 0 0 1 0-3.414l2-2a2.414 2.414 0 0 1 3.414 0l5 5a2.414 2.414 0 0 1 0 3.414l-2 2a2.414 2.414 0 0 1-3.414 0L15 13.414l-7.293 7.293a3.121 3.121 0 1 1-4.414-4.414M21 19a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><path class="nt0k6kbww"/>`,
		"fallback": "coolicons:gavel-fill",
	});
}

export default Component;
