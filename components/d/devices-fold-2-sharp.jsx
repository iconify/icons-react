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
		"content": `<style>.ltiy7bbyl {
  fill: currentColor;
  d: path("M6.02 20V4h12.276l3.404 8.5h-3.488V20zm1-1h10.192v-6.5H8.935L7.018 7.721z");
}
</style><path class="ltiy7bbyl"/>`,
		"fallback": "material-symbols-light:devices-fold-2-sharp",
	});
}

export default Component;
