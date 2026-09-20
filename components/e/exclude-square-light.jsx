import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ux-ombczu {
  fill: currentColor;
  d: path("M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-53.52 120l-44-44h39l44 44ZM46 54.48l44 44v39l-44-44ZM93.52 46l44 44h-39l-44-44ZM102 154v-52h52v52Zm64 3.52v-39l44 44v39Zm44-12L166.48 102H210Zm-56-56L110.48 46H154Zm-108 21L89.52 154H46Zm56 56L145.52 210H102Z");
}
</style><path class="ux-ombczu"/>`,
		"fallback": "ph:exclude-square-light",
	});
}

export default Component;
