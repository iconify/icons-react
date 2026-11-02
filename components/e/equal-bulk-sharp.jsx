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
		"content": `<style>.bhqsqi7qs {
  fill: currentColor;
  d: path("M18 8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm0 6a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="bhqsqi7qs"/>`,
		"fallback": "coolicons:equal-bulk-sharp",
	});
}

export default Component;
