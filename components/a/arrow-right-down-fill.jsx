import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhsi4tbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhsi4tbzp"/>`,
		"fallback": "mingcute:arrow-right-down-fill",
	});
}

export default Component;
