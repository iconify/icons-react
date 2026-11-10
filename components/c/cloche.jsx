import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/p4pec6bad.css';
import '../../css/l/lvb-1jbul.css';
import '../../css/r/rv8wi5b_h.css';
import '../../css/r/rv-e2kbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="p4pec6bad"/><path class="lvb-1jbul"/><path class="rv8wi5b_h"/><path class="rv-e2kbhh"/></g>`,
		"fallback": "matita:cloche",
	});
}

export default Component;
