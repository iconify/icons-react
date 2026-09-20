import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8_rbj_tk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w8_rbj_tk"/>`,
		"fallback": "streamline-plump:hospital-sign-square-remix",
	});
}

export default Component;
