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
		"content": `<style>.c1t7h65-t {
  fill: currentColor;
  d: path("M3 12.5v-1h18v1zm4.5-3v-2h9v2zm0 7v-2h9v2z");
}
</style><path class="c1t7h65-t"/>`,
		"fallback": "material-symbols-light:align-center-outline",
	});
}

export default Component;
