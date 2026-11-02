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
		"content": `<style>.b6pe25bjv {
  fill: currentColor;
  d: path("M15 3a1 1 0 0 1 1 1h2a1 1 0 0 1 1 1v1h2a1 1 0 0 1 0 2h-2v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1 1h-3v4h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-4H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z");
}
</style><path class="b6pe25bjv"/>`,
		"fallback": "coolicons:drill-fill-sharp",
	});
}

export default Component;
