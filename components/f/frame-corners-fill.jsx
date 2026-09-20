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
		"content": `<style>.em8i11bon {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M88 192H56a8 8 0 0 1-8-8v-32a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16m120-88a8 8 0 0 1-16 0V80h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z");
}
</style><path class="em8i11bon"/>`,
		"fallback": "ph:frame-corners-fill",
	});
}

export default Component;
