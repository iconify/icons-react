import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwpn5jbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwpn5jbfi"/>`,
		"fallback": "thesvg-color:general-electric",
	});
}

export default Component;
