import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od2q7ebbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od2q7ebbl"/>`,
		"fallback": "bx:bx-pencil",
	});
}

export default Component;
