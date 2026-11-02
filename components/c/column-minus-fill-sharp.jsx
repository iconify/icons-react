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
		"content": `<style>.wq4fn5bmi {
  fill: currentColor;
  d: path("M3 20V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m17-9a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2Z");
}
</style><path class="wq4fn5bmi"/>`,
		"fallback": "coolicons:column-minus-fill-sharp",
	});
}

export default Component;
