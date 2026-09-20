import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk8-a8pgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wk8-a8pgw"/>`,
		"fallback": "solar:chart-square-bold",
	});
}

export default Component;
