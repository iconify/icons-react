import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrz89ub6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xrz89ub6d"/>`,
		"fallback": "streamline-freehand-color:add-sign-bold",
	});
}

export default Component;
