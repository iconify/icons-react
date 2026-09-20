import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqsv2rbee.css';
import '../../css/d/d38-6mbrk.css';
import '../../css/v/vmf1j-b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dqsv2rbee"/><path class="d38-6mbrk"/><path class="vmf1j-b3b"/></g>`,
		"fallback": "tdesign:expand-down",
	});
}

export default Component;
