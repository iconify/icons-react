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
		"content": `<style>.ww9c_f71i {
  fill: currentColor;
  d: path("M9.462 8.808h5.077L12 6.269zM12 17.73l2.539-2.539H9.46zM19 21H5V3h14z");
}
</style><path class="ww9c_f71i"/>`,
		"fallback": "material-symbols-light:fit-page-height-sharp",
	});
}

export default Component;
