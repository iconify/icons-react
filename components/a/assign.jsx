import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/newhisb0x.css';
import '../../css/l/lvop58bqi.css';
import '../../css/s/s0m_fy--i.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="newhisb0x"/><path class="lvop58bqi"/><path class="s0m_fy--i"/></g>`,
		"fallback": "iwwa:assign",
	});
}

export default Component;
