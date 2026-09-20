import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh-4570hk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qh-4570hk"/>`,
		"fallback": "streamline-plump:drop-down-menu-remix",
	});
}

export default Component;
