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
		"content": `<style>.a10st2b-y {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0v-6h-2v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V11H4v6a1 1 0 0 1-2 0Zm18 6V4H4v5Zm-3-4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2ZM9 16a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="a10st2b-y"/>`,
		"fallback": "coolicons:atm-fill-sharp",
	});
}

export default Component;
