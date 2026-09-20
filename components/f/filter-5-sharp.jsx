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
		"content": `<style>.nucfay7xu {
  fill: currentColor;
  d: path("M11 14.5h5v-5h-4v-3h4v-1h-5v5h4v3h-4zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="nucfay7xu"/>`,
		"fallback": "material-symbols-light:filter-5-sharp",
	});
}

export default Component;
