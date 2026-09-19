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
		"content": `<style>.lckuwvg-j {
  fill: currentColor;
  d: path("M9 16h6v-6h4l-7-7l-7 7h4zm-4 2h14v2H5z");
}
</style><path class="lckuwvg-j"/>`,
		"fallback": "ic:baseline-file-upload",
	});
}

export default Component;
