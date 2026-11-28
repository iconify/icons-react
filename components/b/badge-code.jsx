import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/q/qbdsnuxpd.css';
import '../../css/n/n5_uowbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l4--ovbba"/><path class="qbdsnuxpd"/><path class="n5_uowbnw"/></g>`,
		"fallback": "iconaut:badge-code",
	});
}

export default Component;
