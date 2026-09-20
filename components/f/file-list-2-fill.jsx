import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msngx6wzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msngx6wzk"/>`,
		"fallback": "ri:file-list-2-fill",
	});
}

export default Component;
