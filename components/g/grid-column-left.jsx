import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttk0ucc9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttk0ucc9e"/>`,
		"fallback": "boxicons:grid-column-left",
	});
}

export default Component;
