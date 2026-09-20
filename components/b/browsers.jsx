import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ivx0tvomz {
  fill: currentColor;
  d: path("M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 48v16H40V88Zm0 112H40v-80h144zm32-32h-16V88a16 16 0 0 0-16-16H72V56h144Z");
}
</style><path class="ivx0tvomz"/>`,
		"fallback": "ph:browsers",
	});
}

export default Component;
