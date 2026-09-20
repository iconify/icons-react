import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv90lrb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv90lrb_m"/>`,
		"fallback": "mdi:diving-scuba-flag",
	});
}

export default Component;
