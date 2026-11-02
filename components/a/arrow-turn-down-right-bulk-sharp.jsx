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
		"content": `<style>.t-y62113c {
  fill: currentColor;
  d: path("M8 15h6.586l-3.293-3.293a.999.999 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a.999.999 0 1 1-1.414-1.414L14.586 17H7a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0Z");
}
</style><path class="t-y62113c"/>`,
		"fallback": "coolicons:arrow-turn-down-right-bulk-sharp",
	});
}

export default Component;
