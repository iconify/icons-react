import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmhppnjtp.css';
import '../../css/y/yle63cbew.css';
import '../../css/h/h84tzd74r.css';
import '../../css/o/oe-_9db0s.css';
import '../../css/a/a1yitac1e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nmhppnjtp"/><path class="yle63cbew"/><path class="h84tzd74r"/><path class="oe-_9db0s"/><path class="a1yitac1e"/></g>`,
		"fallback": "streamline-color:beach",
	});
}

export default Component;
