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
		"content": `<style>.uze_2l0qq {
  fill: currentColor;
  d: path("M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1zM15 14.5h1v-9h-1v4h-3v-4h-1v5h4z");
}
</style><path class="uze_2l0qq"/>`,
		"fallback": "material-symbols-light:filter-4-sharp",
	});
}

export default Component;
