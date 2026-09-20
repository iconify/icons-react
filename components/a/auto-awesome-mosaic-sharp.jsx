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
		"content": `<style>.z8b3xebcf {
  fill: currentColor;
  d: path("M11 20H4V4h7zm2-9V4h7v7zm0 9v-7h7v7z");
}
</style><path class="z8b3xebcf"/>`,
		"fallback": "material-symbols-light:auto-awesome-mosaic-sharp",
	});
}

export default Component;
