import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yhnqlx3ap.css';
import '../../css/j/jpyjlobuf.css';
import '../../css/o/omi2j1bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yhnqlx3ap"/><path class="jpyjlobuf"/><path class="omi2j1bhz"/></g>`,
		"fallback": "keyline-icons:calendar-sparkles-sharp-duotone",
	});
}

export default Component;
