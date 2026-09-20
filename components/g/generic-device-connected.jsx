import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqy5gdbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqy5gdbrs"/>`,
		"fallback": "ix:generic-device-connected",
	});
}

export default Component;
