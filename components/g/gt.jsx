import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv8dbcm4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv8dbcm4u"/>`,
		"fallback": "token:gt",
	});
}

export default Component;
