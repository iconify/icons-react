import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkzxq9dxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkzxq9dxy"/>`,
		"fallback": "mynaui:archive",
	});
}

export default Component;
