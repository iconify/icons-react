import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xgeiq7btn.css';
import '../../css/l/l8iufbc7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xgeiq7btn"/><path class="l8iufbc7b"/></g>`,
		"fallback": "keyline-icons:award-sharp-fill",
	});
}

export default Component;
