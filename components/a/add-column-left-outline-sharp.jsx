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
		"content": `<style>.wdyz72o0x {
  fill: currentColor;
  d: path("M20 19V5h-6.558v14zM5 20v-3.116h1V19h6.442V5H6v2.116H5V4h16v16zm8.442-8h-1zM5 14.5v-2H3v-1h2v-2h1v2h2v1H6v2z");
}
</style><path class="wdyz72o0x"/>`,
		"fallback": "material-symbols-light:add-column-left-outline-sharp",
	});
}

export default Component;
