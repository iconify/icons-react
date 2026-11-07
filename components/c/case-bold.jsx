import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcha-w7qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcha-w7qm"/>`,
		"fallback": "solar:case-bold",
	});
}

export default Component;
