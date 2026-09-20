import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kp4ebdcxj.css';
import '../../css/r/r_01umbet.css';
import '../../css/e/et7ufkrmd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kp4ebdcxj"/><path class="r_01umbet"/><path class="et7ufkrmd"/></g>`,
		"fallback": "streamline-color:help-chat-2",
	});
}

export default Component;
