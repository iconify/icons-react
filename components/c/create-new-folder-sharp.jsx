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
		"content": `<style>.eu3xiy_iw {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm12-4h2v-2h2v-2h-2v-2h-2v2h-2v2h2z");
}
</style><path class="eu3xiy_iw"/>`,
		"fallback": "material-symbols:create-new-folder-sharp",
	});
}

export default Component;
