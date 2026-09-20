import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh71cgazm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh71cgazm"/>`,
		"fallback": "mdi:arrow-bottom-right-bold-box-outline",
	});
}

export default Component;
