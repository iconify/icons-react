import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve5lq_olz.css';
import '../../css/q/qmbsycchv.css';
import '../../css/o/o3xhv7enl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve5lq_olz"/><path class="qmbsycchv"/><path class="o3xhv7enl"/>`,
		"fallback": "flat-color-icons:data-sheet",
	});
}

export default Component;
