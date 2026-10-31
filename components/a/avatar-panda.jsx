import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xq411rb6x.css';
import '../../css/g/gubk4aczs.css';
import '../../css/x/xf9llu04j.css';
import '../../css/g/g6fuefeni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xq411rb6x"/><path class="gubk4aczs wm-shadow"/><path class="xf9llu04j"/><path class="g6fuefeni"/></g>`,
		"fallback": "withicons-brutal:avatar-panda",
	});
}

export default Component;
