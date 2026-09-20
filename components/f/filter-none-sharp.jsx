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
		"content": `<style>.nc3lmzbik {
  fill: currentColor;
  d: path("M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="nc3lmzbik"/>`,
		"fallback": "material-symbols-light:filter-none-sharp",
	});
}

export default Component;
