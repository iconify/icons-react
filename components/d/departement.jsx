import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnmv6cwab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnmv6cwab"/>`,
		"fallback": "hugeicons:departement",
	});
}

export default Component;
