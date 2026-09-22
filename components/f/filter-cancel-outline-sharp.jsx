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
		"content": `<style>.jb65wu89i {
  fill: currentColor;
  d: path("m15.9 18.512l-.708-.714l2.1-2.106l-2.1-2.086l.708-.714l2.106 2.112l2.086-2.112l.708.714l-2.08 2.086l2.08 2.106l-.708.714l-2.086-2.093zM8.5 19v-6.346L2.45 5h14.1l-6.05 7.654V19zm1-6.7L14.45 6h-9.9zm0 0");
}
</style><path class="jb65wu89i"/>`,
		"fallback": "material-symbols-light:filter-cancel-outline-sharp",
	});
}

export default Component;
