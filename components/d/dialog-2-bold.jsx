import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgnlg6b8s.css';
import '../../css/v/vrz_ok9dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vgnlg6b8s"/><path class="vrz_ok9dh"/></g>`,
		"fallback": "solar:dialog-2-bold",
	});
}

export default Component;
