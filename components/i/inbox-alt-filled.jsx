import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i47jo8n6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i47jo8n6j"/>`,
		"fallback": "griddy-icons:inbox-alt-filled",
	});
}

export default Component;
