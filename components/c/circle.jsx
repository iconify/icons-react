import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me7l_yy_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me7l_yy_m"/>`,
		"fallback": "mynaui:circle",
	});
}

export default Component;
