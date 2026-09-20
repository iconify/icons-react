import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di7hah0nb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="di7hah0nb"/>`,
		"fallback": "ix:dashboard-pen-filled",
	});
}

export default Component;
