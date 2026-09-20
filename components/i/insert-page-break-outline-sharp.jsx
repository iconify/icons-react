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
		"content": `<style>.ei1cd1bgv {
  fill: currentColor;
  d: path("M4 22v-5h2v3h12v-3h2v5zm0-11V2h10l6 6v3h-2V9h-5V4H6v7zm5 4v-2h6v2zm8 0v-2h6v2zM1 15v-2h6v2zm11 2");
}
</style><path class="ei1cd1bgv"/>`,
		"fallback": "material-symbols:insert-page-break-outline-sharp",
	});
}

export default Component;
