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
		"content": `<style>.z7v__r5kb {
  fill: currentColor;
  d: path("M21 18a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Zm-9.707-2.707L13.586 13H4a1 1 0 0 1 0-2h9.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414");
}
</style><path class="z7v__r5kb"/>`,
		"fallback": "coolicons:arrow-right-to-line-fill",
	});
}

export default Component;
