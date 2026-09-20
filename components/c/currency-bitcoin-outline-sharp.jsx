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
		"content": `<style>.wp-ckjbzo {
  fill: currentColor;
  d: path("M9 21v-2H6v-2h2V7H6V5h3V3h2v2h2V3h2v2.125q1.3.35 2.15 1.413T18 9q0 .725-.25 1.388t-.7 1.187q.875.525 1.413 1.425T19 15q0 1.65-1.175 2.825T15 19v2h-2v-2h-2v2zm1-10h4q.825 0 1.413-.587T16 9t-.587-1.412T14 7h-4zm0 6h5q.825 0 1.413-.587T17 15t-.587-1.412T15 13h-5z");
}
</style><path class="wp-ckjbzo"/>`,
		"fallback": "material-symbols:currency-bitcoin-outline-sharp",
	});
}

export default Component;
