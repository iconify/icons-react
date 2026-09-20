import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lt9-pnbdn {
  fill: currentColor;
  d: path("M14 4a3 3 0 1 0-6 0v2.5a.5.5 0 0 0 .5.5H11a3 3 0 0 0 3-3m-3-2a2 2 0 1 1 0 4H9V4a2 2 0 0 1 2-2m-7-.98a3 3 0 1 0 0 6h2.5a.5.5 0 0 0 .5-.5v-2.5a3 3 0 0 0-3-3m-2 3a2 2 0 1 1 4 0v2H4a2 2 0 0 1-2-2M4 14a3 3 0 1 1 0-6h2.5a.5.5 0 0 1 .5.5V11a3 3 0 0 1-3 3m-2-3a2 2 0 1 0 4 0V9H4a2 2 0 0 0-2 2m9 3a3 3 0 1 0 0-6H8.5a.5.5 0 0 0-.5.5V11a3 3 0 0 0 3 3m2-3a2 2 0 1 1-4 0V9h2a2 2 0 0 1 2 2");
}
</style><path class="lt9-pnbdn"/>`,
		"fallback": "fluent:clover-16-regular",
	});
}

export default Component;
