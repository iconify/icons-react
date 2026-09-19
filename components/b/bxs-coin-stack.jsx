import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujzwsr14u.css';
import '../../css/u/uxhd56ztt.css';
import '../../css/w/wfpfh2pvo.css';
import '../../css/x/x1jbyemsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujzwsr14u"/><path class="uxhd56ztt"/><path class="wfpfh2pvo"/><path class="x1jbyemsn"/>`,
		"fallback": "bx:bxs-coin-stack",
	});
}

export default Component;
