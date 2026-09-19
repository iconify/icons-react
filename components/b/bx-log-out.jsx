import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5-h-rzii.css';
import '../../css/d/d01u25bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5-h-rzii"/><path class="d01u25bof"/>`,
		"fallback": "bx:bx-log-out",
	});
}

export default Component;
