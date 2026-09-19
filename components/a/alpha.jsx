import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hutwm4b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hutwm4b8n"/>`,
		"fallback": "hugeicons:alpha",
	});
}

export default Component;
