import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahkf60ncm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahkf60ncm"/>`,
		"fallback": "humbleicons:certificate",
	});
}

export default Component;
