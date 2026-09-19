import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylacaac8n.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylacaac8n"/>`,
		"fallback": "whh:carrot",
	});
}

export default Component;
