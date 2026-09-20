import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns28zkbvl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ns28zkbvl"/>`,
		"fallback": "streamline-plump:electric-cord-1-solid",
	});
}

export default Component;
