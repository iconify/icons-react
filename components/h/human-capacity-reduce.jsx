import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3ah2ig2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3ah2ig2v"/>`,
		"fallback": "mdi:human-capacity-reduce",
	});
}

export default Component;
