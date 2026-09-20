import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpm55bzfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpm55bzfb"/>`,
		"fallback": "mynaui:code",
	});
}

export default Component;
