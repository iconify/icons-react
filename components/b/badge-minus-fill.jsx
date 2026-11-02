import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpa6sprsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpa6sprsd"/>`,
		"fallback": "mingcute:badge-minus-fill",
	});
}

export default Component;
