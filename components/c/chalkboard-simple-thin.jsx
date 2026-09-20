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
		"content": `<style>.kpiiav3-s {
  fill: currentColor;
  d: path("M240 196h-12v-28a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v28H36V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v80a4 4 0 0 0 8 0V56a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v140H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8m-76-24h56v24h-56Z");
}
</style><path class="kpiiav3-s"/>`,
		"fallback": "ph:chalkboard-simple-thin",
	});
}

export default Component;
