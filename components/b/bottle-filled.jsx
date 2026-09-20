import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-2s2sb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p-2s2sb5n"/>`,
		"fallback": "reicon:bottle-filled",
	});
}

export default Component;
