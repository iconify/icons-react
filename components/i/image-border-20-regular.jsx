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
		"content": `<style>.mxgru27wr {
  fill: currentColor;
  d: path("M11.5 7.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1h8v7.782l-2.802-2.788a1.7 1.7 0 0 0-2.396 0L6 13.782zm4.493 5.703L12.802 14H7.198l2.309-2.297a.7.7 0 0 1 .986 0M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z");
}
</style><path class="mxgru27wr"/>`,
		"fallback": "fluent:image-border-20-regular",
	});
}

export default Component;
