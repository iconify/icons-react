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
		"content": `<style>.rp-rwpbej {
  fill: currentColor;
  d: path("M6 18V6h2v12zm11 0l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z");
}
</style><path class="rp-rwpbej"/>`,
		"fallback": "material-symbols:first-page-outline",
	});
}

export default Component;
