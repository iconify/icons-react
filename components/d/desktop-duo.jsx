import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qemmzeblx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n3uwabccu.css';
import '../../css/b/beb0xwwts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qemmzeblx secondary"/><g class="dt0cm9dhy primary"><path class="n3uwabccu"/><path class="beb0xwwts"/></g>`,
		"fallback": "iconaut:desktop-duo",
	});
}

export default Component;
