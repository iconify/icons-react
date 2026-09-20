import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0g2y8b7b.css';
import '../../css/v/vnec7ub2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n0g2y8b7b"/><path class="vnec7ub2r"/></g>`,
		"fallback": "tdesign:component-stickytool",
	});
}

export default Component;
