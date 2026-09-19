import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di-r0pzwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di-r0pzwl"/>`,
		"fallback": "cbi:aqara-g4",
	});
}

export default Component;
