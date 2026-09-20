import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw_3ueabf.css';
import '../../css/p/p4jp_qb4m.css';
import '../../css/x/x69qajbhd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jw_3ueabf"/><path class="p4jp_qb4m"/><path class="x69qajbhd"/></g>`,
		"fallback": "streamline-color:code-analysis",
	});
}

export default Component;
