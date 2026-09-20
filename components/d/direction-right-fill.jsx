import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_d8u_bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_d8u_bno"/>`,
		"fallback": "mage:direction-right-fill",
	});
}

export default Component;
