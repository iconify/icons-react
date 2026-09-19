import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhxnkh_mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhxnkh_mo"/>`,
		"fallback": "boxicons:chevron-left-square-filled",
	});
}

export default Component;
