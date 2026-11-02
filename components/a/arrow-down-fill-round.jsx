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
		"content": `<style>.s7rjugupz {
  fill: currentColor;
  d: path("m11.293 19.707l-5-5a.999.999 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 2 0v11.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0");
}
</style><path class="s7rjugupz"/>`,
		"fallback": "coolicons:arrow-down-fill-round",
	});
}

export default Component;
