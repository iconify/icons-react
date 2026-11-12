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
		"content": `<style>.sxfg33b8p {
  fill: currentColor;
  d: path("M2 17C2 8.716 8.716 2 17 2h4a1 1 0 0 1 0 2h-4C9.82 4 4 9.82 4 17v4a1 1 0 0 1-2 0ZM2 5V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0");
}
</style><path class="sxfg33b8p"/>`,
		"fallback": "coolicons:corner-radius-fill",
	});
}

export default Component;
