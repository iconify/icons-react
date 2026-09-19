import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vukoj8c0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vukoj8c0v"/>`,
		"fallback": "fe:gift",
	});
}

export default Component;
