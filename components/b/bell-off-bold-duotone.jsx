import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8czseb2v.css';
import '../../css/u/uoo_ldb1e.css';
import '../../css/h/h03wxzbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8czseb2v"/><path class="uoo_ldb1e"/><path class="h03wxzbdn"/>`,
		"fallback": "solar:bell-off-bold-duotone",
	});
}

export default Component;
