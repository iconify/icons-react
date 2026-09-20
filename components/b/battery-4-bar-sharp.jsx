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
		"content": `<style>.dhi03jbhp {
  fill: currentColor;
  d: path("M8.885 12h6.23V5.462h-6.23zm-1 9V4.48h2.423V3h3.384v1.48h2.424V21z");
}
</style><path class="dhi03jbhp"/>`,
		"fallback": "material-symbols-light:battery-4-bar-sharp",
	});
}

export default Component;
