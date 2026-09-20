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
		"content": `<style>.h0m0zc1sm {
  fill: currentColor;
  d: path("M3.23 20V4h16v3.77h1.54v1h-1.54v2.73h1.54v1h-1.54v2.73h1.54v1h-1.54V20zM7 16.23h4.039v-3.038H7zm5.423-6.422h3.039V7.769h-3.039zm-5.423 2h4.039V7.769H7zm5.423 4.423h3.039v-5.039h-3.039z");
}
</style><path class="h0m0zc1sm"/>`,
		"fallback": "material-symbols-light:developer-board-sharp",
	});
}

export default Component;
