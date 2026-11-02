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
		"content": `<style>.rptoojz2b {
  fill: currentColor;
  d: path("M13 7.414V19a1 1 0 0 1-2 0V7.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a.999.999 0 1 1-1.414 1.414Z");
}
</style><path class="rptoojz2b"/>`,
		"fallback": "coolicons:arrow-up-bulk-sharp",
	});
}

export default Component;
