import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej6xgxb3x.css';
import '../../css/q/q7mu9wb5t.css';
import '../../css/n/ne7rp1b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej6xgxb3x"/><circle class="q7mu9wb5t"/><path class="ne7rp1b2v"/>`,
		"fallback": "bx:bxs-institution",
	});
}

export default Component;
