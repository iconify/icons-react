import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5o5d4ter.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y5o5d4ter"/>`,
		"fallback": "ix:axes-synchronous",
	});
}

export default Component;
