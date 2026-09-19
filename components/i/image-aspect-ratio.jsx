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
		"content": `<style>.f8b_prb2o {
  fill: currentColor;
  d: path("M16 10h-2v2h2zm0 4h-2v2h2zm-8-4H6v2h2zm4 0h-2v2h2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z");
}
</style><path class="f8b_prb2o"/>`,
		"fallback": "ic:image-aspect-ratio",
	});
}

export default Component;
