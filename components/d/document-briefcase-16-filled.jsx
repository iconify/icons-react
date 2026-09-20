import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x1xd1z0ve {
  fill: currentColor;
  d: path("M9 4.5V1H5.5A1.5 1.5 0 0 0 4 2.5v2.55Q4.243 5 4.5 5h2a2.5 2.5 0 0 1 2.458 2.042A2.5 2.5 0 0 1 11 9.5v4a2.5 2.5 0 0 1-.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5V6h-3.5A1.5 1.5 0 0 1 9 4.5m1 0V1.25L13.75 5H10.5a.5.5 0 0 1-.5-.5m-7 3V8h-.5A1.5 1.5 0 0 0 1 9.5v4A1.5 1.5 0 0 0 2.5 15h6a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 8.5 8H8v-.5A1.5 1.5 0 0 0 6.5 6h-2A1.5 1.5 0 0 0 3 7.5M4.5 7h2a.5.5 0 0 1 .5.5V8H4v-.5a.5.5 0 0 1 .5-.5");
}
</style><path class="x1xd1z0ve"/>`,
		"fallback": "fluent:document-briefcase-16-filled",
	});
}

export default Component;
