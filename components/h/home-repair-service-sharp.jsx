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
		"content": `<style>.ctw4cr3yt {
  fill: currentColor;
  d: path("M8.5 8.462h7V6h-7zM3 19v-4.77h3.385v1h1v-1h9.23v1h1v-1H21V19zm0-5.538v-5h4.5V5h9v3.462H21v5h-3.384V12.23h-1v1.23H7.385v-1.23h-1v1.23z");
}
</style><path class="ctw4cr3yt"/>`,
		"fallback": "material-symbols-light:home-repair-service-sharp",
	});
}

export default Component;
