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
		"content": `<style>.maro73blj {
  fill: currentColor;
  d: path("M14 14.5h1v-9h-3v1h2zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-4V4z");
}
</style><path class="maro73blj"/>`,
		"fallback": "material-symbols-light:filter-1-outline-sharp",
	});
}

export default Component;
