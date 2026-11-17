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
		"content": `<style>.qzushipho {
  fill: currentColor;
  d: path("M4 7v6h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2Zm5 7V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m2-7v6h2V7Zm10 4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2v1h2a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2v-1h-2a1 1 0 0 1 0-2Z");
}
</style><path class="qzushipho"/>`,
		"fallback": "coolicons:co2-fill-sharp",
	});
}

export default Component;
