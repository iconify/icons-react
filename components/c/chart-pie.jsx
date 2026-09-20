import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-rqddb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-rqddb_e"/>`,
		"fallback": "uil:chart-pie",
	});
}

export default Component;
