import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpfg2hbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lpfg2hbtb"/>`,
		"fallback": "mingcute:computer-fill",
	});
}

export default Component;
