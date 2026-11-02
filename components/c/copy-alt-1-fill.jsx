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
		"content": `<style>.xz9akfbmx {
  fill: currentColor;
  d: path("M2 11a3 3 0 0 1 3-3h3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm17 3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-8a.997.997 0 0 0-1 1v3h3a3 3 0 0 1 3 3v3Z");
}
</style><path class="xz9akfbmx"/>`,
		"fallback": "coolicons:copy-alt-1-fill",
	});
}

export default Component;
