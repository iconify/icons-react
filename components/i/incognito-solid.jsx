import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0a_tmbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0a_tmbyj"/>`,
		"fallback": "mynaui:incognito-solid",
	});
}

export default Component;
