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
		"content": `<style>.st6f8hpmp {
  fill: currentColor;
  d: path("M12 3.5a4.5 4.5 0 0 0-4.495 4.285a.75.75 0 0 1-.75.715H6.5a3 3 0 0 0 0 6H10V16H6.5a4.5 4.5 0 0 1-.42-8.98a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 16h-4v-1.5h4a3 3 0 1 0 0-6h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 3.5m2.78 8.28a.75.75 0 0 1-1.06 0l-1.22-1.22v8.88l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L11 19.44v-8.88l-1.22 1.22a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06");
}
</style><path class="st6f8hpmp"/>`,
		"fallback": "fluent:cloud-bidirectional-24-regular",
	});
}

export default Component;
