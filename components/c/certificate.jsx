import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i43azpccm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i43azpccm"/>`,
		"fallback": "fa-solid:certificate",
	});
}

export default Component;
