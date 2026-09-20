import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okn1ry52b.css';
import '../../css/q/qle24ewqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="okn1ry52b"/><path class="qle24ewqt"/></g>`,
		"fallback": "lets-icons:bell-fill",
	});
}

export default Component;
