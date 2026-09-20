import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i96c_nbug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i96c_nbug"/>`,
		"fallback": "streamline-plump:cherries-remix",
	});
}

export default Component;
