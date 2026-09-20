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
		"content": `<style>.bgd-ppmmz {
  fill: currentColor;
  d: path("M13.066 14.566q.434-.433.434-1.066t-.434-1.066T12 12t-1.066.434q-.434.433-.434 1.066t.434 1.066T12 15t1.066-.434M3 20V7h6V4h6v3h6v13zm7-13h4V5h-4z");
}
</style><path class="bgd-ppmmz"/>`,
		"fallback": "material-symbols-light:enterprise-sharp",
	});
}

export default Component;
