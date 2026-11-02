import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb0ybnbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb0ybnbxm"/>`,
		"fallback": "mingcute:chart-pie-fill",
	});
}

export default Component;
