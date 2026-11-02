import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9qt6xczs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9qt6xczs"/>`,
		"fallback": "mingcute:cylinder-line",
	});
}

export default Component;
