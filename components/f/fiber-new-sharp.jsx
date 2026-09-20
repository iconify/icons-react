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
		"content": `<style>.vs28yfbxe {
  fill: currentColor;
  d: path("M2 19V5h20v14zm1.885-4.308h.827v-4l2.704 4h.853V9.308h-.827v4l-2.654-4h-.904zm5.923 0h3.384v-.827h-2.5v-1.407h2.5v-.827h-2.5v-1.497h2.5v-.826H9.808zm4.923 0h5.385V9.308h-.827v4.5h-1.447v-3.5h-.826v3.5h-1.458v-4.5h-.827z");
}
</style><path class="vs28yfbxe"/>`,
		"fallback": "material-symbols-light:fiber-new-sharp",
	});
}

export default Component;
