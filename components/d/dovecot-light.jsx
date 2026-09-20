import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyb8n-38v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyb8n-38v"/>`,
		"fallback": "selfhst:dovecot-light",
	});
}

export default Component;
