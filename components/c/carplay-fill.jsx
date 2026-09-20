import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdhx6wxse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gdhx6wxse"/>`,
		"fallback": "mingcute:carplay-fill",
	});
}

export default Component;
