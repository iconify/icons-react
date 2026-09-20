import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs_mi8b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs_mi8b4q"/>`,
		"fallback": "mdi:folder-hidden",
	});
}

export default Component;
