import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrg0c1b_k.css';
import '../../css/d/d01u25bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrg0c1b_k"/><path class="d01u25bof"/>`,
		"fallback": "bx:bx-log-in",
	});
}

export default Component;
