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
		"content": `<style>.kyiigybjk {
  fill: currentColor;
  d: path("M11 16.5h2V14h2.5v-2H13V9.5h-2V12H8.5v2H11zM5 20V9.5l7-5.27l7 5.27V20z");
}
</style><path class="kyiigybjk"/>`,
		"fallback": "material-symbols-light:home-health",
	});
}

export default Component;
