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
		"content": `<style>.n-hffqb-x {
  fill: currentColor;
  d: path("m8.293 21.707l-4-4a.999.999 0 1 1 1.414-1.414L8 18.586V7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v6a1 1 0 0 1-2 0V7a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v11.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0");
}
</style><path class="n-hffqb-x"/>`,
		"fallback": "coolicons:arrow-u-turn-left-down-fill-round",
	});
}

export default Component;
