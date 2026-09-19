import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfjl1qd8n.css';

const viewBox = {"width":1024,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfjl1qd8n"/>`,
		"fallback": "whh:fedora",
	});
}

export default Component;
