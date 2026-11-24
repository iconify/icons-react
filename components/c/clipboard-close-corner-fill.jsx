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
		"content": `<style>.ghcr01plh {
  fill: currentColor;
  d: path("M16 4h1a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V7a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H7a.997.997 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m-1.293 9.293L17 15.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L18.414 17l2.293 2.293a.999.999 0 1 1-1.414 1.414L17 18.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414L15.586 17l-2.293-2.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="ghcr01plh"/>`,
		"fallback": "coolicons:clipboard-close-corner-fill",
	});
}

export default Component;
