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
		"content": `<style>.pmd74ubuk {
  fill: currentColor;
  d: path("M14 14.5h1v-9h-3v1h2zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="pmd74ubuk"/>`,
		"fallback": "material-symbols-light:filter-1-sharp",
	});
}

export default Component;
