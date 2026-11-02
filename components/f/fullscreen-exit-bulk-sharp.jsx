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
		"content": `<style>.oa5w3hb3t {
  fill: currentColor;
  d: path("M7 7V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2Zm10 0h4a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0ZM7 17H3a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0Zm10 0v4a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2Z");
}
</style><path class="oa5w3hb3t"/>`,
		"fallback": "coolicons:fullscreen-exit-bulk-sharp",
	});
}

export default Component;
