import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oi5wyabdz {
  fill: currentColor;
  d: path("M10.492 8.91A.5.5 0 0 0 9.5 9v4.502l.008.09a.5.5 0 0 0 .992-.09V9zm.307-2.16a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0M18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0M3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0");
}
</style><path class="oi5wyabdz"/>`,
		"fallback": "fluent:info-20-regular",
	});
}

export default Component;
