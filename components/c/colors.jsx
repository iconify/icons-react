import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw_m1l2te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw_m1l2te"/>`,
		"fallback": "hugeicons:colors",
	});
}

export default Component;
