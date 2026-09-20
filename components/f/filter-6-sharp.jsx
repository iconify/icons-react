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
		"content": `<style>.yu5efhbus {
  fill: currentColor;
  d: path("M12 9.5v-3h3v-1h-4v9h5v-5zm0 1h3v3h-3zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="yu5efhbus"/>`,
		"fallback": "material-symbols-light:filter-6-sharp",
	});
}

export default Component;
