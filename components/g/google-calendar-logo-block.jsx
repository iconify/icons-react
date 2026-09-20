import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok93i9baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ok93i9baq"/>`,
		"fallback": "streamline-logos:google-calendar-logo-block",
	});
}

export default Component;
