import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrt9xcbpr.css';
import '../../css/x/xtmnjwu4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wrt9xcbpr"/><path class="xtmnjwu4f"/>`,
		"fallback": "boxicons:card-view-large-filled",
	});
}

export default Component;
