import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo0137bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo0137bkz"/>`,
		"fallback": "boxicons:fish-alt-filled",
	});
}

export default Component;
