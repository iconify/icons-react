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
		"content": `<style>.wnfounbyj {
  fill: currentColor;
  d: path("M6.5 11.5v-1h1v1zM16 15h2l1-1v-2h-1.5v1.5h-1v-3H19V9h-3l-1 1v4zM5 15h1.5v-2h1.75l.75-.75v-2.5L8.25 9H5zm5 0h1.5v-2.4l1 2.4H14V9h-1.5v2.35L11.5 9H10zm-8 5V4h20v16z");
}
</style><path class="wnfounbyj"/>`,
		"fallback": "material-symbols:file-png-sharp",
	});
}

export default Component;
