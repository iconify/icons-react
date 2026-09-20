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
		"content": `<style>.ss-dbrboq {
  fill: currentColor;
  d: path("M11.283 16.5h6.333v-1h-5.333zm-4.898 0h2.21l7.132-7.127l-2.19-2.21l-7.153 7.128zm8.076-7.133l-.925-.944zM7.27 15.616v-.95l4.685-4.68l.456.489l.469.475l-4.66 4.666zm5.14-5.141l.47.475l-.925-.963zM4 20V4h16v16zm1-1h14V5H5zM5 5v14z");
}
</style><path class="ss-dbrboq"/>`,
		"fallback": "material-symbols-light:drive-file-rename-outline-sharp",
	});
}

export default Component;
