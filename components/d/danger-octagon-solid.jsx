import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz-u_qb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz-u_qb-r"/>`,
		"fallback": "mynaui:danger-octagon-solid",
	});
}

export default Component;
