import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li1cvl8bm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li1cvl8bm"/>`,
		"fallback": "mdi:eye-circle-outline",
	});
}

export default Component;
