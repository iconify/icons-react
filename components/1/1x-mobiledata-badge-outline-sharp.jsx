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
		"content": `<style>.akla70bzq {
  fill: currentColor;
  d: path("M7 17h2V7H5v2h2zm4.5 0h2l1.75-3.175L17 17h2l-2.75-5L19 7h-2l-1.75 3.175L13.5 7h-2l2.75 5zM1 21V3h22v18zm2-2h18V5H3zm0 0V5z");
}
</style><path class="akla70bzq"/>`,
		"fallback": "material-symbols:1x-mobiledata-badge-outline-sharp",
	});
}

export default Component;
