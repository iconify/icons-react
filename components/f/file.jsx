import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxp7l0bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxp7l0bba"/>`,
		"fallback": "matita:file",
	});
}

export default Component;
