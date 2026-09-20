import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s7jpg4ctr.css';
import '../../css/h/h4qy5bccs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s7jpg4ctr"/><path class="h4qy5bccs"/></g>`,
		"fallback": "solar:folder-symlink-line-duotone",
	});
}

export default Component;
