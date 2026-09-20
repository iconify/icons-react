import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zo4iyealg.css';
import '../../css/g/gyx8j7b3u.css';
import '../../css/g/g2uo418mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zo4iyealg"/><path class="gyx8j7b3u"/><path class="g2uo418mh"/></g>`,
		"fallback": "streamline-ultimate-color:drawer-upload",
	});
}

export default Component;
