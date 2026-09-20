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
		"content": `<style>.d-hf8vdlx {
  fill: currentColor;
  d: path("M9 20v-7L1.95 4h18.1L13 13v7zm10-1l-1.4-1.4l1.575-1.6H15v-2h4.175L17.6 12.4L19 11l4 4zm-8-6.7L15.95 6h-9.9z");
}
</style><path class="d-hf8vdlx"/>`,
		"fallback": "material-symbols:filter-arrow-right-sharp",
	});
}

export default Component;
