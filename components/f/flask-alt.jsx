import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytt1jfbgv.css';
import '../../css/r/rx1fuccar.css';
import '../../css/b/bledq51zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ytt1jfbgv"/><path class="rx1fuccar"/><path class="bledq51zh"/></g>`,
		"fallback": "lets-icons:flask-alt",
	});
}

export default Component;
