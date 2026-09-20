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
		"content": `<style>.botjst6yn {
  fill: currentColor;
  d: path("M10.587 14.692v-4.5h-2.25v-.884h5.384v.884h-2.25v4.5zm-8.087 0V9.308h4.385v5.384H6V13H3.385v1.692zm.885-2.576H6v-1.924H3.385zm11.846 2.576V9.308H21.5v5.384h-.885v-4.5h-1.807v3.5h-.885v-3.5h-1.807v4.5z");
}
</style><path class="botjst6yn"/>`,
		"fallback": "material-symbols-light:atm-sharp",
	});
}

export default Component;
