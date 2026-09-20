import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia27gz4hm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia27gz4hm"/>`,
		"fallback": "ri:drag-drop-fill",
	});
}

export default Component;
