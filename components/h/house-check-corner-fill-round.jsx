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
		"content": `<style>.paliozf9y {
  fill: currentColor;
  d: path("M17.714 9H12a3 3 0 0 0-3 3v9a1 1 0 0 1-1 1a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 3 17v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l3.08 2.695A1.001 1.001 0 0 1 17.714 9m-4.007 7.293l2.226 2.226l4.299-5.159a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 0 1-1.475.067l-3-3a.999.999 0 1 1 1.414-1.414");
}
</style><path class="paliozf9y"/>`,
		"fallback": "coolicons:house-check-corner-fill-round",
	});
}

export default Component;
