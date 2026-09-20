import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs8w4nihw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs8w4nihw"/>`,
		"fallback": "mdi:folder-arrow-down-outline",
	});
}

export default Component;
