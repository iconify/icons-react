import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqrvr7b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqrvr7b0u"/>`,
		"fallback": "thesvg-color:google-dataproc",
	});
}

export default Component;
