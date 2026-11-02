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
		"content": `<style>.tnflv6btz {
  fill: currentColor;
  d: path("M6 3h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m9.293 9.707L13 10.414V20a1 1 0 0 1-2 0v-9.586l-2.293 2.293a.999.999 0 1 1-1.414-1.414l4-4a.997.997 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414");
}
</style><path class="tnflv6btz"/>`,
		"fallback": "coolicons:arrow-up-to-line-fill",
	});
}

export default Component;
