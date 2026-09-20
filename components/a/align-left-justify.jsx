import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khitb6bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khitb6bqf"/>`,
		"fallback": "uim:align-left-justify",
	});
}

export default Component;
