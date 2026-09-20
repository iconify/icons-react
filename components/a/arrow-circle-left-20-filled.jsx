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
		"content": `<style>.aa1y0x_xw {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16m-.854-4.646a.5.5 0 0 0 .708-.708L7.707 10.5H13.5a.5.5 0 0 0 0-1H7.707l2.147-2.146a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 0 .708z");
}
</style><path class="aa1y0x_xw"/>`,
		"fallback": "fluent:arrow-circle-left-20-filled",
	});
}

export default Component;
