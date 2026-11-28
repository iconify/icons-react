import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgago0byv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fe53ifbdz.css';
import '../../css/y/ygbs7gbiy.css';
import '../../css/q/qc03fjlhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zgago0byv"/><g class="dt0cm9dhy primary"><path class="fe53ifbdz"/><path class="ygbs7gbiy"/><path class="qc03fjlhl"/></g>`,
		"fallback": "iconaut:history-duo",
	});
}

export default Component;
