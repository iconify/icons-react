import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gv3piabzc.css';
import '../../css/s/sit-aqvtt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gv3piabzc"/><path class="sit-aqvtt"/></g>`,
		"fallback": "streamline-color:back-camera-1-flat",
	});
}

export default Component;
