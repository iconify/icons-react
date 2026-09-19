import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj_u1q2qu.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj_u1q2qu"/>`,
		"fallback": "garden:dashboard-26",
	});
}

export default Component;
