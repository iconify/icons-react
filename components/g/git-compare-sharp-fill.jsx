import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ol3golbcs.css';
import '../../css/h/hz7_q3dyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ol3golbcs"/><path class="hz7_q3dyh"/></g>`,
		"fallback": "keyline-icons:git-compare-sharp-fill",
	});
}

export default Component;
