import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsdkt9e7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsdkt9e7e"/>`,
		"fallback": "mdi:facebook",
	});
}

export default Component;
