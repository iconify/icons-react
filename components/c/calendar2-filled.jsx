import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4poizbsi.css';
import '../../css/m/m5ttcnu1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4poizbsi"/><path class="m5ttcnu1j"/></g>`,
		"fallback": "reicon:calendar2-filled",
	});
}

export default Component;
