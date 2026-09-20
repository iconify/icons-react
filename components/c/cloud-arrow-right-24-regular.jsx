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
		"content": `<style>.eeogsvk4r {
  fill: currentColor;
  d: path("M7.505 8.785a4.5 4.5 0 0 1 8.99 0a.75.75 0 0 0 .75.715h.255a3 3 0 0 1 2.673 1.636a6.5 6.5 0 0 1 1.8 1.857Q22 12.749 22 12.5a4.5 4.5 0 0 0-4.08-4.48a6.001 6.001 0 0 0-11.84 0A4.5 4.5 0 0 0 6.5 17h3.519a6.6 6.6 0 0 1 .057-1.5H6.5a3 3 0 1 1 0-6h.256c.4 0 .73-.315.749-.715M16.5 11a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L18.293 16z");
}
</style><path class="eeogsvk4r"/>`,
		"fallback": "fluent:cloud-arrow-right-24-regular",
	});
}

export default Component;
