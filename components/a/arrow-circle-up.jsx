import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xts5eub8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xts5eub8n"/>`,
		"fallback": "ci:arrow-circle-up",
	});
}

export default Component;
