import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo5m2nblu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yo5m2nblu"/>`,
		"fallback": "streamline-plump:drop-down-menu-solid",
	});
}

export default Component;
