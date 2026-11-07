import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj3qc1jvi.css';
import '../../css/w/wp4198lwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj3qc1jvi"/><path class="wp4198lwm"/>`,
		"fallback": "solar:fire-minimalistic-bold-duotone",
	});
}

export default Component;
