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
		"content": `<style>.dehnpbebl {
  fill: currentColor;
  d: path("M6 21v-2l1-1H2V3h10v2H4v11h16v-3h2v5h-5l1 1v2zm9-6l-5-5l1.4-1.4l2.6 2.575V3h2v8.175L18.6 8.6L20 10z");
}
</style><path class="dehnpbebl"/>`,
		"fallback": "material-symbols:browser-updated-sharp",
	});
}

export default Component;
