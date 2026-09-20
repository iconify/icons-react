import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xc1d7ubog.css';
import '../../css/h/h15fop3fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xc1d7ubog"/><path class="h15fop3fz"/></g>`,
		"fallback": "streamline-ultimate:calendar-3",
	});
}

export default Component;
