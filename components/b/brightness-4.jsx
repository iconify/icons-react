import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbmop0bub.css';

const viewBox = {"width":488,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbmop0bub"/>`,
		"fallback": "zmdi:brightness-4",
	});
}

export default Component;
