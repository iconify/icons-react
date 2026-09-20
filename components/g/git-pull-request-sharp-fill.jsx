import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gtxracc9l.css';
import '../../css/h/hz7_q3dyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gtxracc9l"/><path class="hz7_q3dyh"/></g>`,
		"fallback": "keyline-icons:git-pull-request-sharp-fill",
	});
}

export default Component;
