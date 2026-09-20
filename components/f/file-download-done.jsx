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
		"content": `<style>.xy3tgwc8b {
  fill: currentColor;
  d: path("m9.55 16l-5.675-5.675L5.3 8.9l4.25 4.25L18.7 4l1.425 1.425zM5 20v-2h14v2z");
}
</style><path class="xy3tgwc8b"/>`,
		"fallback": "material-symbols:file-download-done",
	});
}

export default Component;
