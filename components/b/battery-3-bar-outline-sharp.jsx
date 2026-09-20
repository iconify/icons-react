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
		"content": `<style>.vwltxh8aj {
  fill: currentColor;
  d: path("M7.885 21V4.48h2.423V3h3.384v1.48h2.424V21zm1-7h6.23V5.462h-6.23z");
}
</style><path class="vwltxh8aj"/>`,
		"fallback": "material-symbols-light:battery-3-bar-outline-sharp",
	});
}

export default Component;
