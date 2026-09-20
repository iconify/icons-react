import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0u42hbke.css';
import '../../css/m/m4s2yt54y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p0u42hbke"/><path class="m4s2yt54y"/></g>`,
		"fallback": "majesticons:delete-bin",
	});
}

export default Component;
