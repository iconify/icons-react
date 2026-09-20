import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn86ay6-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn86ay6-p"/>`,
		"fallback": "mingcute:folder-delete-line",
	});
}

export default Component;
