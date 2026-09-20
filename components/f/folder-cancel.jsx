import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-35gac2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-35gac2q"/>`,
		"fallback": "mdi:folder-cancel",
	});
}

export default Component;
