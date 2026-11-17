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
		"content": `<style>.b9zf0fbqp {
  fill: currentColor;
  d: path("M2 9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5Zm12.832-1.555a1 1 0 0 0-1.664 1.11a6.21 6.21 0 0 1 0 6.89a1 1 0 0 0 .277 1.387a1 1 0 0 0 1.387-.277a8.2 8.2 0 0 0 1.034-2.199a8.2 8.2 0 0 0-1.034-6.911m-2.42 3.234a4.6 4.6 0 0 0-.58-1.234a1 1 0 0 0-1.664 1.11a2.61 2.61 0 0 1 0 2.89a1 1 0 0 0 1.664 1.11a4.6 4.6 0 0 0 .58-3.876M8.01 11H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="b9zf0fbqp"/>`,
		"fallback": "coolicons:credit-card-contactless-fill-round",
	});
}

export default Component;
