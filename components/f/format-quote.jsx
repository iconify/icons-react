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
		"content": `<style>.u82-tjbvp {
  fill: currentColor;
  d: path("M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z");
}
</style><path class="u82-tjbvp"/>`,
		"fallback": "ic:format-quote",
	});
}

export default Component;
