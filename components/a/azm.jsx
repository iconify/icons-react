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
		"content": `<style>.m6d7zcb1g {
  fill: currentColor;
  d: path("m16 17l4-4V4h-9L7 8h9zm-6 6l4-4v-9H5l-4 4h9z");
}
</style><path class="m6d7zcb1g"/>`,
		"fallback": "material-symbols:azm",
	});
}

export default Component;
