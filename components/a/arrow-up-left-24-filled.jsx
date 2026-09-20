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
		"content": `<style>.bkq8tu_hy {
  fill: currentColor;
  d: path("M13 3a1 1 0 1 1 0 2H6.414l14.293 14.293a1 1 0 0 1-1.414 1.414L5 6.414V13a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1z");
}
</style><path class="bkq8tu_hy"/>`,
		"fallback": "fluent:arrow-up-left-24-filled",
	});
}

export default Component;
