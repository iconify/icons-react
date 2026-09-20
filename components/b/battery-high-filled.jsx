import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sj4_mtb0f.css';
import '../../css/o/oday-ybeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sj4_mtb0f"/><path class="oday-ybeb"/></g>`,
		"fallback": "reicon:battery-high-filled",
	});
}

export default Component;
