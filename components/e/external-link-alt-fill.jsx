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
		"content": `<style>.c2jpt99vd {
  fill: currentColor;
  d: path("M14 18h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a.997.997 0 0 0-1 1v3a1 1 0 0 1-2 0V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-3a1 1 0 0 1 0-2m-4 2a1 1 0 0 1-2 0v-2.586l-4.293 4.293a.999.999 0 1 1-1.414-1.414L6.586 16H4a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1Z");
}
</style><path class="c2jpt99vd"/>`,
		"fallback": "coolicons:external-link-alt-fill",
	});
}

export default Component;
