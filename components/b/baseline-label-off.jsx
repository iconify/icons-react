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
		"content": `<style>.qtq2yxboo {
  fill: currentColor;
  d: path("m3.25 2.75l17 17L19 21l-2-2H5c-1.1 0-2-.9-2-2V7c0-.55.23-1.05.59-1.41L2 4zM22 12l-4.37-6.16C17.27 5.33 16.67 5 16 5H8l11 11z");
}
</style><path class="qtq2yxboo"/>`,
		"fallback": "ic:baseline-label-off",
	});
}

export default Component;
