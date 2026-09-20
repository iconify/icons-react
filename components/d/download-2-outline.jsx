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
		"content": `<style>.fq-e53b_y {
  fill: currentColor;
  d: path("M4 22v-2h16v2zm8-4L5 9h4V2h6v7h4zm0-3.25L14.9 11H13V4h-2v7H9.1zM12 11");
}
</style><path class="fq-e53b_y"/>`,
		"fallback": "material-symbols:download-2-outline",
	});
}

export default Component;
