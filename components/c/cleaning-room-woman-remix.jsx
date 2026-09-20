import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynw1a_xpb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ynw1a_xpb"/>`,
		"fallback": "streamline-plump:cleaning-room-woman-remix",
	});
}

export default Component;
