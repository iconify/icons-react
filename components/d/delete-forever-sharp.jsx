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
		"content": `<style>.ydc6l3jov {
  fill: currentColor;
  d: path("m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM5 21V6H4V4h5V3h6v1h5v2h-1v15z");
}
</style><path class="ydc6l3jov"/>`,
		"fallback": "material-symbols:delete-forever-sharp",
	});
}

export default Component;
