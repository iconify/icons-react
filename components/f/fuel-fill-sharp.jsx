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
		"content": `<style>.vtusrsf2l {
  fill: currentColor;
  d: path("M14 8H2V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm0 5v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10h12v1h3a1 1 0 0 1 1 1v4h2V7.414l-2.707-2.707a.999.999 0 1 1 1.414-1.414l3 3A1 1 0 0 1 22 7v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z");
}
</style><path class="vtusrsf2l"/>`,
		"fallback": "coolicons:fuel-fill-sharp",
	});
}

export default Component;
