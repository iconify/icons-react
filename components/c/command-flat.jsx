import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3ubpnbxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3ubpnbxi"/>`,
		"fallback": "streamline-plump-color:command-flat",
	});
}

export default Component;
