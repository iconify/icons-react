import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgvbszp7r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xgvbszp7r"/>`,
		"fallback": "streamline-flex:disable-bell-notification-remix",
	});
}

export default Component;
