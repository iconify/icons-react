import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npxo1rb6q.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npxo1rb6q"/>`,
		"fallback": "whh:createfile",
	});
}

export default Component;
