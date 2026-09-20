import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0mk15-cf.css';
import '../../css/o/on1q1bazu.css';
import '../../css/y/yoj5lcb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n0mk15-cf"/><path class="on1q1bazu"/><path class="yoj5lcb4i"/></g>`,
		"fallback": "streamline-ultimate-color:dial-pad",
	});
}

export default Component;
