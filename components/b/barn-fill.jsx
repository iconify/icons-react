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
		"content": `<style>.em3c45bwt {
  fill: currentColor;
  d: path("M3 22a1 1 0 0 1 0-2v-9.333c0-.649.211-1.281.6-1.8l2.365-3.154c.232-.311.523-.573.856-.772l3.636-2.181c.95-.57 2.136-.57 3.086 0l3.636 2.181c.333.199.624.461.856.772L20.4 8.867c.389.519.6 1.151.6 1.8V20a1 1 0 0 1 0 2Zm9-10a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 12m3 6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2h6Z");
}
</style><path class="em3c45bwt"/>`,
		"fallback": "coolicons:barn-fill",
	});
}

export default Component;
