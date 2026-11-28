import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpd0b1bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpd0b1bgq"/>`,
		"fallback": "iconaut:folder-kanban-solid",
	});
}

export default Component;
