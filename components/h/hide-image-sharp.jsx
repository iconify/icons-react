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
		"content": `<style>.um0xt_8-x {
  fill: currentColor;
  d: path("M20 17.15L6.85 4H20zm.492 4.758L18.585 20H4V5.416L2.092 3.508L2.8 2.8l18.4 18.4zM7.5 16.5h7.579l-2.35-2.35l-1.517 1.889l-1.75-2.116z");
}
</style><path class="um0xt_8-x"/>`,
		"fallback": "material-symbols-light:hide-image-sharp",
	});
}

export default Component;
