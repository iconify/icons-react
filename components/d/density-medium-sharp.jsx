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
		"content": `<style>.yhreoxb4k {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-7.5v-1h16v1zM4 5V4h16v1z");
}
</style><path class="yhreoxb4k"/>`,
		"fallback": "material-symbols-light:density-medium-sharp",
	});
}

export default Component;
