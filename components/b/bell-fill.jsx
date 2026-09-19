import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly_6v1tzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly_6v1tzk"/>`,
		"fallback": "eva:bell-fill",
	});
}

export default Component;
