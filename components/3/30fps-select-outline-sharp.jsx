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
		"content": `<style>.ofcnrsbhu {
  fill: currentColor;
  d: path("M5.154 13v-1h4.462V9.5H5.154v-1h4.462V6H5.154V5h5.462v8zm8.23 0V5h5.462v8zm1-1h3.462V6h-3.461zM3.847 21.5v-4h1v4zm3.385 0v-4h1v4zm3.384 0v-4h1v4zm3.385 0v-4h6.154v4z");
}
</style><path class="ofcnrsbhu"/>`,
		"fallback": "material-symbols-light:30fps-select-outline-sharp",
	});
}

export default Component;
