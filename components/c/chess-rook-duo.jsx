import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6flvpbbh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ib6wldbhv.css';
import '../../css/k/kbxpyqdun.css';
import '../../css/x/xfj94vbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6flvpbbh secondary"/><g class="dt0cm9dhy primary"><path class="ib6wldbhv"/><path class="kbxpyqdun"/><path class="xfj94vbak"/></g>`,
		"fallback": "iconaut:chess-rook-duo",
	});
}

export default Component;
