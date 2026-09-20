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
		"content": `<style>.iq4b7sb4f {
  fill: currentColor;
  d: path("M12 14.5h4v-9h-5v5h4v3h-3zm3-5h-3v-3h3zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="iq4b7sb4f"/>`,
		"fallback": "material-symbols-light:filter-9-sharp",
	});
}

export default Component;
