import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgf0h5e8n.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgf0h5e8n"/>`,
		"fallback": "whh:atari",
	});
}

export default Component;
