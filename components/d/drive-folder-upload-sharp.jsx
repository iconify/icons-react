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
		"content": `<style>.skgmo27ln {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm9-3h2v-4.2l1.6 1.6L16 13l-4-4l-4 4l1.4 1.4l1.6-1.6z");
}
</style><path class="skgmo27ln"/>`,
		"fallback": "material-symbols:drive-folder-upload-sharp",
	});
}

export default Component;
