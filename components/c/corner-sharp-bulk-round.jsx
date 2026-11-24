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
		"content": `<style>.qx48rybny {
  fill: currentColor;
  d: path("M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H6v13a1 1 0 0 1-2 0Z");
}
</style><path class="qx48rybny"/>`,
		"fallback": "coolicons:corner-sharp-bulk-round",
	});
}

export default Component;
