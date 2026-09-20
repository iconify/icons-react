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
		"content": `<style>.lg57wgblv {
  fill: currentColor;
  d: path("m18.616 21.789l-.689-.689l2.056-2.1h-4.867v-1h4.886l-2.1-2.1l.714-.688l3.288 3.288zM3 19V5h18v9.05q-.54-.265-1.13-.408t-1.197-.142q-2.154 0-3.663 1.51q-1.51 1.51-1.51 3.663V19zm9-6.884l8-5.212L19.692 6L12 11L4.308 6L4 6.904z");
}
</style><path class="lg57wgblv"/>`,
		"fallback": "material-symbols-light:forward-to-inbox-sharp",
	});
}

export default Component;
