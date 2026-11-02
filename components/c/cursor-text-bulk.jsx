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
		"content": `<style>.v0htw__0u {
  fill: currentColor;
  d: path("M10 2c.74 0 1.45.27 2 .764A3 3 0 0 1 14 2h2a1 1 0 0 1 0 2h-2a.997.997 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2h-2c-.74 0-1.45-.27-2-.764A3 3 0 0 1 10 22H8a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1V5a.997.997 0 0 0-1-1H8a1 1 0 0 1 0-2Z");
}
</style><path class="v0htw__0u"/>`,
		"fallback": "coolicons:cursor-text-bulk",
	});
}

export default Component;
