import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-918hb8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l-918hb8z"/>`,
		"fallback": "ix:cloud-thunder-filled",
	});
}

export default Component;
