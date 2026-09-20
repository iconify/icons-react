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
		"content": `<style>.nc_pebceo {
  fill: currentColor;
  d: path("M12 9.5v-3h3v-1h-4v9h5v-5zm0 1h3v3h-3zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-4V4z");
}
</style><path class="nc_pebceo"/>`,
		"fallback": "material-symbols-light:filter-6-outline-sharp",
	});
}

export default Component;
