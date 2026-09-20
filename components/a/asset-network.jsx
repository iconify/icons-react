import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xung1lbrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xung1lbrm"/>`,
		"fallback": "ix:asset-network",
	});
}

export default Component;
