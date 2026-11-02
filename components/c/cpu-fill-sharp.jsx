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
		"content": `<style>.gtnvbc2ld {
  fill: currentColor;
  d: path("M11 3v2h2V3a1 1 0 0 1 2 0v2h3a1 1 0 0 1 1 1v3h2a1 1 0 0 1 0 2h-2v2h2a1 1 0 0 1 0 2h-2v3a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-2 0v-2h-2v2a1 1 0 0 1-2 0v-2H6a1 1 0 0 1-1-1v-3H3a1 1 0 0 1 0-2h2v-2H3a1 1 0 0 1 0-2h2V6a1 1 0 0 1 1-1h3V3a1 1 0 0 1 2 0m-2 7v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1");
}
</style><path class="gtnvbc2ld"/>`,
		"fallback": "coolicons:cpu-fill-sharp",
	});
}

export default Component;
