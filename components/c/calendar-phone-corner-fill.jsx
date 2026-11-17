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
		"content": `<style>.h8of455vh {
  fill: currentColor;
  d: path("M9 3v1h6V3a1 1 0 0 1 2 0v1h1a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H5v9a1 1 0 0 0 1 1h3a1 1 0 0 1 0 2H6a3.004 3.004 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0m4.889 9h1.333c.765 0 1.581.357 1.838 1.128l.444 1.334c.239.716-.195 1.42-.686 1.912l-.182.182l.808.808l.182-.182c.492-.491 1.196-.925 1.912-.686l1.334.444c.771.257 1.128 1.073 1.128 1.838v1.333A1.89 1.89 0 0 1 20.111 22a8 8 0 0 1-3.157-.638a8 8 0 0 1-2.578-1.738a8 8 0 0 1-1.738-2.578A8 8 0 0 1 12 13.889A1.89 1.89 0 0 1 13.889 12");
}
</style><path class="h8of455vh"/>`,
		"fallback": "coolicons:calendar-phone-corner-fill",
	});
}

export default Component;
