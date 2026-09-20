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
		"content": `<style>.e6wuk5vxx {
  fill: currentColor;
  d: path("M3 20.5v-1h18v1zm4.692-3.577V3.481h2.039v13.442zm6.577 0V9.481h2.039v7.442z");
}
</style><path class="e6wuk5vxx"/>`,
		"fallback": "material-symbols-light:align-vertical-bottom-outline-sharp",
	});
}

export default Component;
