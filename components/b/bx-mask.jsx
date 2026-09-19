import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aleoypblh.css';
import '../../css/q/qqfcp2vpb.css';
import '../../css/j/j496qmb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aleoypblh"/><ellipse class="qqfcp2vpb"/><ellipse class="j496qmb2q"/>`,
		"fallback": "bx:bx-mask",
	});
}

export default Component;
