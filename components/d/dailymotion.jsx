import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1vt4ejsn.css';
import '../../css/w/wig593f0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1vt4ejsn"/><path class="wig593f0e"/>`,
		"fallback": "bxl:dailymotion",
	});
}

export default Component;
