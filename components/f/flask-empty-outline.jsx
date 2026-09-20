import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4j46wbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4j46wbzb"/>`,
		"fallback": "mdi:flask-empty-outline",
	});
}

export default Component;
