import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wopg6tb8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wopg6tb8n"/>`,
		"fallback": "streamline-plump:cake-slice-remix",
	});
}

export default Component;
