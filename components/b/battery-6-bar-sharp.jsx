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
		"content": `<style>.z1i6almxh {
  fill: currentColor;
  d: path("M7.885 21V4.48h2.423V3h3.384v1.48h2.424V21zm1-13.192h6.23V5.46h-6.23z");
}
</style><path class="z1i6almxh"/>`,
		"fallback": "material-symbols-light:battery-6-bar-sharp",
	});
}

export default Component;
