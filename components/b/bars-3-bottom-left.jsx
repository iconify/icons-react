import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojwy94mst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojwy94mst"/>`,
		"fallback": "heroicons-outline:bars-3-bottom-left",
	});
}

export default Component;
