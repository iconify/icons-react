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
		"content": `<style>.r0f4p2b2w {
  fill: currentColor;
  d: path("M16 7a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-3.586l-6.293 6.293a.999.999 0 1 1-1.414-1.414L13.586 9H10a1 1 0 0 1 0-2Z");
}
</style><path class="r0f4p2b2w"/>`,
		"fallback": "coolicons:arrow-up-right-small-fill-sharp",
	});
}

export default Component;
