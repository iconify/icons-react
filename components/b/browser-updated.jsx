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
		"content": `<style>.ic25qccim {
  fill: currentColor;
  d: path("M6 21v-2l1-1H4q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h8v2H4v11h16v-3h2v3q0 .825-.587 1.413T20 18h-3l1 1v2zm9-6l-5-5l1.4-1.4l2.6 2.575V3h2v8.175L18.6 8.6L20 10z");
}
</style><path class="ic25qccim"/>`,
		"fallback": "material-symbols:browser-updated",
	});
}

export default Component;
