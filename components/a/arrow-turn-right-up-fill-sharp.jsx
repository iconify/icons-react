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
		"content": `<style>.p1x2bcb2i {
  fill: currentColor;
  d: path("M15 16V9.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a.999.999 0 1 1-1.414 1.414L17 9.414V17a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2Z");
}
</style><path class="p1x2bcb2i"/>`,
		"fallback": "coolicons:arrow-turn-right-up-fill-sharp",
	});
}

export default Component;
