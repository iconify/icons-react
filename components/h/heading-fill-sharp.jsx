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
		"content": `<style>.a1kmyhber {
  fill: currentColor;
  d: path("M8 11h8V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0v-6H8v6a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><path class="a1kmyhber"/>`,
		"fallback": "coolicons:heading-fill-sharp",
	});
}

export default Component;
