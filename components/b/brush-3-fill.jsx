import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy6d1wrkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy6d1wrkj"/>`,
		"fallback": "mingcute:brush-3-fill",
	});
}

export default Component;
