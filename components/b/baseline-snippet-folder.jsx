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
		"content": `<style>.r_0e7f7ku {
  fill: currentColor;
  d: path("m15.88 10.5l1.62 1.62v3.38h-3v-5zM22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h6l2 2h8c1.1 0 2 .9 2 2m-3 3.5L16.5 9H13v8h6z");
}
</style><path class="r_0e7f7ku"/>`,
		"fallback": "ic:baseline-snippet-folder",
	});
}

export default Component;
