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
		"content": `<style>.ci8j_vdfh {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6h-2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6H6v14h3a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1Zm-3 19v-3c0-.265.105-.52.293-.707l5-5a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 22h-3a1 1 0 0 1-1-1");
}
</style><path class="ci8j_vdfh"/>`,
		"fallback": "coolicons:clipboard-edit-corner-fill-sharp",
	});
}

export default Component;
