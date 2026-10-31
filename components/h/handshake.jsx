import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v0vhadc2o.css';
import '../../css/t/t4rsb0bdb.css';
import '../../css/v/vn72fibji.css';
import '../../css/n/n5_q2jfbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="v0vhadc2o wm-shadow"/><path class="t4rsb0bdb wm-shadow"/><path class="vn72fibji"/><path class="n5_q2jfbs"/></g>`,
		"fallback": "withicons-brutal:handshake",
	});
}

export default Component;
