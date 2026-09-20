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
		"content": `<style>.ytixpqzsh {
  fill: currentColor;
  d: path("M4 20v-7.292l2 2l4-4l4 4l4-4l2 2V20zM4 4h16v7.287l-2-2l-4 4l-4-4l-4 4l-2-2z");
}
</style><path class="ytixpqzsh"/>`,
		"fallback": "material-symbols-light:broken-image-sharp",
	});
}

export default Component;
