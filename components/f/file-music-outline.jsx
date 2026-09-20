import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq5o1ytlu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq5o1ytlu"/>`,
		"fallback": "mdi:file-music-outline",
	});
}

export default Component;
