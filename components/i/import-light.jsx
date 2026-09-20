import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx3vv32-x.css';
import '../../css/a/at0zcdcig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vx3vv32-x"/><path class="at0zcdcig"/></g>`,
		"fallback": "lets-icons:import-light",
	});
}

export default Component;
