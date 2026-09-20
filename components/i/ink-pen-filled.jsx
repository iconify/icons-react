import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8d74bc_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l8d74bc_n"/>`,
		"fallback": "ix:ink-pen-filled",
	});
}

export default Component;
