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
		"content": `<style>.hw-uukbuq {
  fill: currentColor;
  d: path("M3 19V8.462h4.5V5h9v3.462H21V19zm4.385-4.77v1h-1v-1H4V18h16v-3.77h-2.384v1h-1v-1zM4 9.462v3.77h2.385v-1h1v1h9.23v-1h1v1H20V9.46zm4.5-1h7V6h-7z");
}
</style><path class="hw-uukbuq"/>`,
		"fallback": "material-symbols-light:home-repair-service-outline-sharp",
	});
}

export default Component;
