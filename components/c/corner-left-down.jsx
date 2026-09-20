import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aotl0-zyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aotl0-zyj"/>`,
		"fallback": "mynaui:corner-left-down",
	});
}

export default Component;
