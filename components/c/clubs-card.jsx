import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy8n1abgr.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy8n1abgr"/>`,
		"fallback": "ps:clubs-card",
	});
}

export default Component;
