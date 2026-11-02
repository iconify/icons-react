import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h--td-svz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h--td-svz"/>`,
		"fallback": "mingcute:folder-open-2-line",
	});
}

export default Component;
