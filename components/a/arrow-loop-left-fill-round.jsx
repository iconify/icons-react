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
		"content": `<style>.krum1cb0w {
  fill: currentColor;
  d: path("M12 19H7.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L7.414 17H12a6 6 0 0 0 5.881-4.811a5.998 5.998 0 0 0-9.199-6.188A6 6 0 0 0 6 11a1 1 0 0 1-2 0a8 8 0 1 1 8 8");
}
</style><path class="krum1cb0w"/>`,
		"fallback": "coolicons:arrow-loop-left-fill-round",
	});
}

export default Component;
