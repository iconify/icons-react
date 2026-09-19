import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb1rmu98c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb1rmu98c"/>`,
		"fallback": "bx:bx-rupee",
	});
}

export default Component;
