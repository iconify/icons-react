import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipje62d_x.css';
import '../../css/y/yb1t-pwor.css';
import '../../css/o/ogh4q1bay.css';
import '../../css/s/s6qd-zbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipje62d_x"/><path class="yb1t-pwor"/><path class="ogh4q1bay"/><path class="s6qd-zbqk"/>`,
		"fallback": "solar:card-bold-duotone",
	});
}

export default Component;
