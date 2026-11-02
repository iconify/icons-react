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
		"content": `<style>.lqc51hb0h {
  fill: currentColor;
  d: path("M9 4a1 1 0 0 1 1 1v6h4V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6h-4v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V5a1 1 0 0 1 1-1Z");
}
</style><path class="lqc51hb0h"/>`,
		"fallback": "coolicons:dumbbell-fill-sharp",
	});
}

export default Component;
