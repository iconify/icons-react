import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dix33kbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dix33kbhd"/>`,
		"fallback": "mynaui:fat-corner-right-down-solid",
	});
}

export default Component;
