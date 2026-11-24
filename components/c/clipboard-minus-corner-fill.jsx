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
		"content": `<style>.re-qlj18o {
  fill: currentColor;
  d: path("M16 4h1a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V7a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H7a.997.997 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m5 11a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><path class="re-qlj18o"/>`,
		"fallback": "coolicons:clipboard-minus-corner-fill",
	});
}

export default Component;
