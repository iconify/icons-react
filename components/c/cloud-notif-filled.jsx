import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ishfdnbdo.css';
import '../../css/o/ortj8b5io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ishfdnbdo"/><path class="ortj8b5io"/></g>`,
		"fallback": "reicon:cloud-notif-filled",
	});
}

export default Component;
