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
		"content": `<style>.c_xu72scu {
  fill: currentColor;
  d: path("M6.462 16.23v-1.768h12.384V6h1.77v13.308l-3.078-3.077zm-3.077-.691V3h13.461v9.462H6.462zm1-2.422l1.656-1.656h9.805V4H4.385zm0-2.27V4z");
}
</style><path class="c_xu72scu"/>`,
		"fallback": "material-symbols-light:forum-outline-sharp",
	});
}

export default Component;
