import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xhsh3ub0g.css';
import '../../css/n/n2r4_-b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xhsh3ub0g"/><path class="n2r4_-b3d"/></g>`,
		"fallback": "iconoir:comp-align-left-solid",
	});
}

export default Component;
