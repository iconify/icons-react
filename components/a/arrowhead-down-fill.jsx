import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en1tw8sio.css';
import '../../css/n/nbwbgdb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en1tw8sio"/><path class="nbwbgdb1f"/>`,
		"fallback": "eva:arrowhead-down-fill",
	});
}

export default Component;
