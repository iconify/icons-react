import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzjqs1bbd.css';
import '../../css/l/l4h5u_zeh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzjqs1bbd"/><path class="l4h5u_zeh"/>`,
		"fallback": "ion:file-tray-full-outline",
	});
}

export default Component;
