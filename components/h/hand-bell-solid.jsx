import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_6b54omy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_6b54omy"/>`,
		"fallback": "iconaut:hand-bell-solid",
	});
}

export default Component;
