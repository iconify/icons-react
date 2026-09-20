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
		"content": `<style>.tmkmlebje {
  fill: currentColor;
  d: path("m15 19l-1.425-1.4l4.6-4.6H2v-2h16.175L13.6 6.4L15 5l7 7z");
}
</style><path class="tmkmlebje"/>`,
		"fallback": "material-symbols:east-sharp",
	});
}

export default Component;
