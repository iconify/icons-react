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
		"content": `<style>.php1gybtd {
  fill: currentColor;
  d: path("M11 14.5h5v-9h-5v1h4v3h-2.384v1H15v3h-4zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="php1gybtd"/>`,
		"fallback": "material-symbols-light:filter-3-sharp",
	});
}

export default Component;
