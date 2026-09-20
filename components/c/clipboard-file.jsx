import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miql4qbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miql4qbpb"/>`,
		"fallback": "mdi:clipboard-file",
	});
}

export default Component;
