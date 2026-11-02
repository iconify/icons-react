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
		"content": `<style>.p06r81o1s {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8h3a1 1 0 0 1 1 1v4h2V7.414l-2.707-2.707a.999.999 0 1 1 1.414-1.414l3 3A1 1 0 0 1 22 7v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4h-2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm7.8 5.6a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 6 13h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 10 11H8Z");
}
</style><path class="p06r81o1s"/>`,
		"fallback": "coolicons:charging-station-fill-sharp",
	});
}

export default Component;
