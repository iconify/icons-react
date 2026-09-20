import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niplj5jjm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="niplj5jjm"/>`,
		"fallback": "ix:connection-bulb",
	});
}

export default Component;
