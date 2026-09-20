import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8q25bckv.css';
import '../../css/g/gepn6ubdy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i8q25bckv"/><path class="gepn6ubdy"/></g>`,
		"fallback": "streamline-color:disable-bell-notification",
	});
}

export default Component;
