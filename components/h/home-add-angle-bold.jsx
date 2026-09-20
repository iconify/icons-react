import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbca2owon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbca2owon"/>`,
		"fallback": "solar:home-add-angle-bold",
	});
}

export default Component;
