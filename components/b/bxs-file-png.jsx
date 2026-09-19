import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-ok2sbil.css';
import '../../css/d/dosvuyafw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-ok2sbil"/><path class="dosvuyafw"/>`,
		"fallback": "bx:bxs-file-png",
	});
}

export default Component;
