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
		"content": `<style>.ne7ykh1nx {
  fill: currentColor;
  d: path("M7 17h2v-7H7zm4 0h2V7h-2zm4 0h2v-4h-2zm2-8V7h-2V5h2V3h2v2h2v2h-2v2zM3 21V3h11v7h7v11z");
}
</style><path class="ne7ykh1nx"/>`,
		"fallback": "material-symbols:add-chart-sharp",
	});
}

export default Component;
