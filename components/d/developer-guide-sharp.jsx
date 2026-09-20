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
		"content": `<style>.shluewb7s {
  fill: currentColor;
  d: path("M4 20V4h16v16zm8.5-15v6.116l2-1.193l2 1.193V5z");
}
</style><path class="shluewb7s"/>`,
		"fallback": "material-symbols-light:developer-guide-sharp",
	});
}

export default Component;
