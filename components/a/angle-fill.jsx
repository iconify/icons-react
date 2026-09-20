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
		"content": `<style>.uju5v5kda {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 88a64.07 64.07 0 0 1 64 64a8 8 0 0 1-16 0a48.05 48.05 0 0 0-48-48a8 8 0 0 1 0-16m88 104H80a8 8 0 0 1-8-8v-80H56a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v104h112a8 8 0 0 1 0 16");
}
</style><path class="uju5v5kda"/>`,
		"fallback": "ph:angle-fill",
	});
}

export default Component;
