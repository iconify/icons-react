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
		"content": `<style>.i3qifbbpu {
  fill: currentColor;
  d: path("M4 20v-1h16v1zM4 5V4h16v1z");
}
</style><path class="i3qifbbpu"/>`,
		"fallback": "material-symbols-light:density-large",
	});
}

export default Component;
