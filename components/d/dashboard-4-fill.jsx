import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxzxubb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxzxubb2u"/>`,
		"fallback": "mingcute:dashboard-4-fill",
	});
}

export default Component;
