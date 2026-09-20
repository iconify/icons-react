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
		"content": `<style>.sba0z8bdk {
  fill: currentColor;
  d: path("M7.423 20v-3.423H4v-1h4.423V20zm8.173 0v-4.423h4.423v1h-3.423V20zM4 8.423v-1h3.423V4h1v4.423zm11.596 0V4h1v3.423h3.423v1z");
}
</style><path class="sba0z8bdk"/>`,
		"fallback": "material-symbols-light:fullscreen-exit",
	});
}

export default Component;
