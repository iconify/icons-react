import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa_ew7b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa_ew7b5o"/>`,
		"fallback": "hugeicons:ham",
	});
}

export default Component;
