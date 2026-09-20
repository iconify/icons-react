import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi6ty55tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi6ty55tw"/>`,
		"fallback": "mynaui:heading-4-solid",
	});
}

export default Component;
