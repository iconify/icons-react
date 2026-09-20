import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3b74gbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3b74gbao"/>`,
		"fallback": "mynaui:chevron-left-waves-solid",
	});
}

export default Component;
