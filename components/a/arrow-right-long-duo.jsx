import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l93ubxnbi.css';
import '../../css/y/yxmqb_bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l93ubxnbi"/><path class="yxmqb_bku"/></g>`,
		"fallback": "iconaut:arrow-right-long-duo",
	});
}

export default Component;
