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
		"content": `<style>.c3fy_gb8f {
  fill: currentColor;
  d: path("M9 8v6.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a.999.999 0 1 1 1.414-1.414L7 14.586V7a1 1 0 0 1 1-1h13a1 1 0 0 1 0 2Z");
}
</style><path class="c3fy_gb8f"/>`,
		"fallback": "coolicons:arrow-turn-left-down-bulk-sharp",
	});
}

export default Component;
