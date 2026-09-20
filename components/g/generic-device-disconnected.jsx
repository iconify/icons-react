import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buhyxjxvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buhyxjxvw"/>`,
		"fallback": "ix:generic-device-disconnected",
	});
}

export default Component;
