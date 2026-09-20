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
		"content": `<style>.x4fzhgh0p {
  fill: currentColor;
  d: path("M8.673 20v-4.673H4V8.692h4.673V4h6.635v4.692H20v6.635h-4.692V20zm1-1h4.635v-4.673H19V9.692h-4.692V5H9.673v4.692H5v4.635h4.673zM12 12");
}
</style><path class="x4fzhgh0p"/>`,
		"fallback": "material-symbols-light:health-cross-outline-sharp",
	});
}

export default Component;
