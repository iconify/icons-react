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
		"content": `<style>.q48-8fbsc {
  fill: currentColor;
  d: path("M8 10H6a4 4 0 1 1 4-4v2h4V6a4 4 0 1 1 4 4h-2v4h2a4 4 0 1 1-4 4v-2h-4v2a4 4 0 1 1-4-4h2Zm2 4h4v-4h-4Z");
}
</style><path class="q48-8fbsc"/>`,
		"fallback": "coolicons:command-fill-sharp",
	});
}

export default Component;
