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
		"content": `<style>.erlg-cc_z {
  fill: currentColor;
  d: path("M12 5.5a4.5 4.5 0 0 0-4.495 4.285a.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6h2.668a1.76 1.76 0 0 0 0 1.5H6.5a4.5 4.5 0 0 1-.42-8.98a6.001 6.001 0 0 1 11.84 0a4.5 4.5 0 0 1 3.75 6.175l-1.21-1.209q.04-.237.04-.486a3 3 0 0 0-3-3h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 5.5m1.78 9.78a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L12.56 18h6.88l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22h-6.88z");
}
</style><path class="erlg-cc_z"/>`,
		"fallback": "fluent:cloud-swap-24-regular",
	});
}

export default Component;
