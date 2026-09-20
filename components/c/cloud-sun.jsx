import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi-r9sb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi-r9sb2r"/>`,
		"fallback": "mynaui:cloud-sun",
	});
}

export default Component;
