import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbf0xbc8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbf0xbc8n"/>`,
		"fallback": "streamline-plump:filter-1",
	});
}

export default Component;
