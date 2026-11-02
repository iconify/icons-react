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
		"content": `<style>.puer1fbki {
  fill: currentColor;
  d: path("M10 5.414V19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 1 2 0v8a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.414L5.707 7.707a.999.999 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414Z");
}
</style><path class="puer1fbki"/>`,
		"fallback": "coolicons:arrow-u-turn-left-up-fill",
	});
}

export default Component;
