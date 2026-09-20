import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4z96hb8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p4z96hb8n"/>`,
		"fallback": "ix:align-center-vertically",
	});
}

export default Component;
