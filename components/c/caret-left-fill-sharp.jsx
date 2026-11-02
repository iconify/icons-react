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
		"content": `<style>.k-q9q7b5g {
  fill: currentColor;
  d: path("M15 8v8a1.002 1.002 0 0 1-1.707.707l-4-4a1 1 0 0 1 0-1.414l4-4A1 1 0 0 1 15 8");
}
</style><path class="k-q9q7b5g"/>`,
		"fallback": "coolicons:caret-left-fill-sharp",
	});
}

export default Component;
