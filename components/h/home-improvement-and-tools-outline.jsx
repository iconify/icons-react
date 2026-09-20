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
		"content": `<style>.ov1e71hbp {
  fill: currentColor;
  d: path("M6 2h12l-3 4.2V19l-3 3l-3-3V6.2zm5 8h2V5.6L14 4h-4l1 1.6zm2 2h-2v2h2zm0 6v-2h-2v2l1 1zm-1-2");
}
</style><path class="ov1e71hbp"/>`,
		"fallback": "material-symbols:home-improvement-and-tools-outline",
	});
}

export default Component;
