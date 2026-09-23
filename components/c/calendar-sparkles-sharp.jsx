import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yhnqlx3ap.css';
import '../../css/y/yqf3lubyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yhnqlx3ap"/><path class="yqf3lubyf"/></g>`,
		"fallback": "keyline-icons:calendar-sparkles-sharp",
	});
}

export default Component;
