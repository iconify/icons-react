import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6a8oybhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6a8oybhl"/>`,
		"fallback": "ri:folder-warning-fill",
	});
}

export default Component;
