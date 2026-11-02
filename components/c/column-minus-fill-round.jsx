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
		"content": `<style>.ukcc3lbke {
  fill: currentColor;
  d: path("M3 7a4 4 0 0 1 8 0v10a4 4 0 0 1-8 0Zm17 4a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2Z");
}
</style><path class="ukcc3lbke"/>`,
		"fallback": "coolicons:column-minus-fill-round",
	});
}

export default Component;
