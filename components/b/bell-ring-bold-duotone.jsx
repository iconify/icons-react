import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8czseb2v.css';
import '../../css/u/uoo_ldb1e.css';
import '../../css/d/d-xw4ab1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8czseb2v"/><path class="uoo_ldb1e"/><path class="d-xw4ab1m"/>`,
		"fallback": "solar:bell-ring-bold-duotone",
	});
}

export default Component;
