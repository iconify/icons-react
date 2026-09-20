import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzghf5blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzghf5blm"/>`,
		"fallback": "mdi:file-powerpoint-box-outline",
	});
}

export default Component;
