import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9wwu21rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9wwu21rw"/>`,
		"fallback": "boxicons:finger-left-filled",
	});
}

export default Component;
