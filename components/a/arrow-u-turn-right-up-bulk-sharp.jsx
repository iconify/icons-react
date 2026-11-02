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
		"content": `<style>.ew-1spsen {
  fill: currentColor;
  d: path("m15.707 2.293l4 4a.999.999 0 1 1-1.414 1.414L16 5.414V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11a1 1 0 0 1 2 0v9h8V5.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.405-.009z");
}
</style><path class="ew-1spsen"/>`,
		"fallback": "coolicons:arrow-u-turn-right-up-bulk-sharp",
	});
}

export default Component;
