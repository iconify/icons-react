import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg08ri5ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg08ri5ny"/>`,
		"fallback": "tdesign:assignment-code-filled",
	});
}

export default Component;
