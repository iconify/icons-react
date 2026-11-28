import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psxbs1bui.css';
import '../../css/h/haywxnunw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psxbs1bui secondary"/><path class="haywxnunw primary"/>`,
		"fallback": "iconaut:badge-duo",
	});
}

export default Component;
