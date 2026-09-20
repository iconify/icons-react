import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxf8udb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxf8udb0x"/>`,
		"fallback": "mynaui:bell-x",
	});
}

export default Component;
