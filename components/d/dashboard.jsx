import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lvmg05bai.css';
import '../../css/i/il9fwh0pn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lvmg05bai"/><path class="il9fwh0pn"/></g>`,
		"fallback": "iconoir:dashboard",
	});
}

export default Component;
