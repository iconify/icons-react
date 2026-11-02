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
		"content": `<style>.np32-8b-g {
  fill: currentColor;
  d: path("m15.707 2.293l4 4a.999.999 0 1 1-1.414 1.414L16 5.414V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a1 1 0 0 1 2 0v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.405-.009z");
}
</style><path class="np32-8b-g"/>`,
		"fallback": "coolicons:arrow-u-turn-right-up-bulk",
	});
}

export default Component;
