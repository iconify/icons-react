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
		"content": `<style>.j4a22tbhd {
  fill: currentColor;
  d: path("M15 17.192L6.846 12L15 6.808z");
}
</style><path class="j4a22tbhd"/>`,
		"fallback": "material-symbols-light:arrow-back-2",
	});
}

export default Component;
