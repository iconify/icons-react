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
		"content": `<style>.ykis_ubjy {
  fill: currentColor;
  d: path("M13.03 3.72a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V1.75a.75.75 0 0 1 1.5 0v3.19l1.22-1.22a.75.75 0 0 1 1.06 0M3.72 6.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H1.75a.75.75 0 0 1 0-1.5h3.19L3.72 8.03a.75.75 0 0 1 0-1.06m11.5 0a.75.75 0 1 1 1.06 1.06l-1.22 1.22h3.19a.75.75 0 0 1 0 1.5h-3.19l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06zm-2.19 9.31a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22v3.19a.75.75 0 0 0 1.5 0v-3.19l1.22 1.22a.75.75 0 0 0 1.06 0");
}
</style><path class="ykis_ubjy"/>`,
		"fallback": "fluent:arrow-move-inward-20-filled",
	});
}

export default Component;
