import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vycj0ibcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vycj0ibcd"/>`,
		"fallback": "mingcute:folder-output-fill",
	});
}

export default Component;
