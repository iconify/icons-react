import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnwzzjb8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnwzzjb8n"/>`,
		"fallback": "selfhst:adguardhome-sync-light",
	});
}

export default Component;
